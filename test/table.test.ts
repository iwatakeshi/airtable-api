import Airtable from '../src/airtable'
import nock from 'nock'
import { getRecordResponse } from './fixtures/responses'
import { mockRecordsApi } from './fixtures/mocks'
import { API_ENDPOINT_SYNC_ID, API_KEY, API_VERSION, BASE_ID, RECORD_ID, TABLE_NAME } from './fixtures/constants'

const airtable = new Airtable({
  apiKey: API_KEY,
  // endpointUrl: 'http://localhost',
})
const base = airtable.base(BASE_ID)

const table = base.table(TABLE_NAME)

describe('Base Data', () => {
  describe('Records', () => {


    describe('List records', () => {
      beforeEach(() => {
        mockRecordsApi(nock(`https://api.airtable.com`)
          .matchHeader('Authorization', `Bearer ${API_KEY}`))

      })
      afterEach(() => nock.cleanAll())
      test('records()', async () => {
        const result = await table.records()
        expect(result.records).toHaveLength(2)
      })
      test('list()', async () => {
        for await (const record of table.list()) {
          expect(record).not.toHaveLength(0)
        }
      })
    })

    describe('Get record', () => {
      beforeEach(() => {
        mockRecordsApi(nock(`https://api.airtable.com`)
          .matchHeader('Authorization', `Bearer ${API_KEY}`))

      })
      afterEach(() => nock.cleanAll())
      test('findRecord()', async () => {
        const result = await table.findRecord(RECORD_ID)
        expect(result).toEqual(getRecordResponse)
      })
    })

    describe('Update multiple records', () => {
      beforeAll(() => {
        mockRecordsApi(nock(`https://api.airtable.com`)
          .matchHeader('Authorization', `Bearer ${API_KEY}`))

      })
      afterEach(() => nock.cleanAll())
      test('updateRecords()', async () => {
        const result = await table.updateRecords([{
          "fields": {
            "Address": "501 Twin Peaks Blvd",
            "Name": "Twin Peaks",
            "Visited": true
          },
          "id": "rec560UJdUtocSouk"
        },
        {
          "fields": {
            "Visited": true
          },
          "id": "rec3lbPRG4aVqkeOQ"
        }])

        expect(result.records).toHaveLength(2)
      })

    })

    describe('Update Multiple Records - Perform Upsert', () => {
      beforeAll(() => nock(`https://api.airtable.com`)
        .matchHeader('Authorization', `Bearer ${API_KEY}`)
        .patch(`/${API_VERSION}/${BASE_ID}/${TABLE_NAME}`)
        .reply(200, {
          "createdRecords": [
            "recsHMqsp3GEm3lEi"
          ],
          "records": [
            {
              "createdTime": "2022-09-12T21:03:48.000Z",
              "fields": {
                "Address": "501 Twin Peaks Blvd",
                "Name": "Twin Peaks",
                "Visited": true
              },
              "id": "rec560UJdUtocSouk"
            },
            {
              "createdTime": "2022-11-15T01:02:04.400Z",
              "fields": {
                "Name": "New Park",
                "Visited": true
              },
              "id": "recsHMqsp3GEm3lEi"
            }
          ],
          "updatedRecords": [
            "rec560UJdUtocSouk"
          ]
        })
      )
      afterEach(() => nock.cleanAll())

      test('updateRecordsUsingUpsert()', async () => {
        const result = await table.updateRecordsUsingUpsert(['Names'], [
          {
            "fields": {
              "Address": "501 Twin Peaks Blvd",
              "Name": "Twin Peaks",
              "Visited": true
            }
          },
          {
            "fields": {
              "Name": "New Park",
              "Visited": true
            }
          }
        ])

        expect(result).toHaveProperty('createdRecords');
        expect(result).toHaveProperty('updatedRecords');
        expect(result.createdRecords).toHaveLength(1);
        expect(result.updatedRecords).toHaveLength(1);
      })
    })

    describe('Create records', () => {
      beforeAll(() => mockRecordsApi(nock(`https://api.airtable.com`)))
      afterAll(() => nock.cleanAll())

      test('createRecords()', async () => {
        const result = await table.createRecords([{
          "fields": {
            "Address": "501 Twin Peaks Blvd",
            "Name": "Twin Peaks",
            "Visited": true
          }
        },
        {
          "fields": {
            "Name": "New Park",
            "Visited": true
          }
        }])

        expect(result.records).toHaveLength(2)
      })

      test('createRecord()', async () => {
        const result = await table.createRecord({
          "fields": {
            "Address": "501 Twin Peaks Blvd",
            "Name": "Twin Peaks",
            "Visited": true
          }
        })

        expect(result).toHaveProperty('id')
      })
    })

    describe('Delete multiple records', () => {
      beforeAll(() => mockRecordsApi(nock(`https://api.airtable.com`)))
      afterAll(() => nock.cleanAll())

      test('deleteRecords()', async () => {
        const result = await table.deleteRecords([RECORD_ID])
        expect(result.records).toHaveLength(2)
      })
    })

    describe('Delete record', () => {
      beforeAll(() => mockRecordsApi(nock(`https://api.airtable.com`)))
      afterAll(() => nock.cleanAll())

      test('deleteRecord()', async () => {
        const result = await table.deleteRecord(RECORD_ID)
        expect(result).toHaveProperty('id')
      })
    })

    describe('Sync CSV', () => {
      beforeAll(() => mockRecordsApi(nock(`https://api.airtable.com`)))
      afterAll(() => nock.cleanAll())

      test.todo('syncCsv()', async () => {
        await expect(table.sync(API_ENDPOINT_SYNC_ID, `'column1,column2
row1-column1,row1-column2
row2-column1,row2-column2'`)).resolves.toBeCalled()
      })
    })
  })
})