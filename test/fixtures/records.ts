import { Record } from '../../src'
import { ProjectTeamMember } from './types'

export type TestRecord = Record<{
  Name: string
  Client: string[]
  Category: string
  Complete: boolean
  'Project team': ProjectTeamMember[]
  'Due date': string
  'Kickoff date': string
  Notes: string
  'Project lead': ProjectTeamMember
}>

export default {
  records: [
    {
      id: 'recABcLKRaQWszKp',
      fields: {
        Name: 'Hand hygiene system',
        Client: ['rec41y8gfRvfu4vvY'],
        Category: 'Healthcare design',
        Complete: true,
        'Project team': [
          {
            id: 'usrQjmLTBxfXNmmR',
            email: 'katherineduh+collab16@demo.htable.com',
            name: 'Jordan Peretz',
          },
          {
            id: 'usru7jLm2cNhriKv',
            email: 'katherineduh+collab7@demo.htable.com',
            name: 'Cameron Toth',
          },
        ],
        'Due date': '2020-10-05',
        'Kickoff date': '2020-09-21',
        Notes:
          "SwipeSmart is a revolutionary technology that promotes sanitation in the healthcare industry by automatically signalling when patients disinfect their hands. A small device that easily clips to a nurse or doctor's scrubs pocket, SwipeSmart makes it easier for medical professionals to ensure safe practices and prevent infection.\n",
        'Project lead': {
          id: 'usru7jLm2cNhriKv',
          email: 'katherineduh+collab7@demo.htable.com',
          name: 'Cameron Toth',
        },
      },
      createdTime: '2020-06-11T01:26:39.000Z',
    },
    {
      id: 'recAtELIMS1xJOTI',
      fields: {
        Name: 'B11 bike saddle',
        Client: ['rec4X2W9SteEl8usP'],
        Category: 'Industrial design',
        Complete: true,
        'Project team': [
          {
            id: 'usru7jLm2cNhriKv',
            email: 'katherineduh+collab7@demo.htable.com',
            name: 'Cameron Toth',
          },
        ],
        'Due date': '2020-10-25',
        'Kickoff date': '2020-10-11',
        'Project images': [
          {
            id: 'att54wLtCTeYcLRU',
            url:
              'https://dl.airtable.com/.attachments/b959babeed09c3ebfcd910bedc858178/27eaf874/vintage-brown-bike-bicycle-5882.jpgautocompresscstinysrgbdpr1w500',
            filename:
              'vintage-brown-bike-bicycle-5882.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            size: 17765,
            type: 'image/jpeg',
            thumbnails: {
              small: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/3b107adeafaac77ac86c959b39752320/d1fa05b3',
                width: 54,
                height: 36,
              },
              large: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/61a1aa7d9171a9b30fafcc1155e89867/c08fcb3c',
                width: 500,
                height: 333,
              },
              full: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/7bc0516ca398ba6d0f3bfa5bf61221a9/d4c46004',
                width: 3000,
                height: 3000,
              },
            },
          },
        ],
        'Project lead': {
          id: 'usru7jLm2cNhriKv',
          email: 'katherineduh+collab7@demo.htable.com',
          name: 'Cameron Toth',
        },
      },
      createdTime: '2020-06-11T01:26:28.000Z',
    },
    {
      id: 'recCCfL0uqK5RB1R',
      fields: {
        Name: 'Flapper brand identity',
        Client: ['rec4uJAePGdsImUSt'],
        Category: 'Brand identity',
        Complete: true,
        'Project team': [
          {
            id: 'usr8e9LJ8HSg29YV',
            email: 'katherineduh+collab26@demo.htable.com',
            name: 'Paris Fotiou',
          },
          {
            id: 'usru7jLm2cNhriKv',
            email: 'katherineduh+collab7@demo.htable.com',
            name: 'Cameron Toth',
          },
          {
            id: 'usrSdmLY5GdbcZzg',
            email: 'katherineduh+collab23@demo.htable.com',
            name: 'Leslie Walker',
          },
        ],
        'Due date': '2020-10-26',
        'Kickoff date': '2020-10-12',
        'Project lead': {
          id: 'usrSdmLY5GdbcZzg',
          email: 'katherineduh+collab23@demo.htable.com',
          name: 'Leslie Walker',
        },
      },
      createdTime: '2020-06-11T01:29:58.000Z',
    },
    {
      id: 'recCDhLnK6DltZfC',
      fields: {
        Name: '443 Huntington brand identity',
        Client: ['rec4fJea19JoRaE8c'],
        Category: 'Industrial design',
        'Project team': [
          {
            id: 'usr8e9LJ8HSg29YV',
            email: 'katherineduh+collab26@demo.htable.com',
            name: 'Paris Fotiou',
          },
          {
            id: 'usr3VLLpygcI46Sh',
            email: 'katherineduh+collab10@demo.htable.com',
            name: 'Gal Samari',
          },
        ],
        'Due date': '2020-10-12',
        'Kickoff date': '2020-09-28',
        'Project images': [
          {
            id: 'attSjDLiGZV3nCh8',
            url:
              'https://dl.airtable.com/.attachments/47bd066a96e64bdbeccd5d471da02b36/9b09e99d/pexels-photo-439391.jpegautocompresscstinysrgbdpr1w500',
            filename:
              'pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            size: 40527,
            type: 'image/jpeg',
            thumbnails: {
              small: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/64d564ed4a385b1ad97a9d9374145c20/12cb6a92',
                width: 48,
                height: 36,
              },
              large: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/d6927068c08d8c3acc32718734c42e0d/02fba5c7',
                width: 500,
                height: 375,
              },
              full: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/06d27dac649d789713c44f6444a05fc0/ab26c72e',
                width: 3000,
                height: 3000,
              },
            },
          },
          {
            id: 'att9S0LKrt2dX0GL',
            url:
              'https://dl.airtable.com/.attachments/8c7dc87340fe47f3496e824f6c9b4ffb/e6060bc9/pexels-photo-430216.jpegautocompresscstinysrgbdpr1w500',
            filename:
              'pexels-photo-430216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            size: 54852,
            type: 'image/jpeg',
            thumbnails: {
              small: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/98a2bd2e4afbb259a49e9ee6579ab8a3/343829e8',
                width: 24,
                height: 36,
              },
              large: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/ab7458c0c295042e777df3d8e2d851ea/fa9755e8',
                width: 500,
                height: 750,
              },
              full: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/811caf020b4dc041a2f4bdc334fcb081/0fa8eae6',
                width: 3000,
                height: 3000,
              },
            },
          },
          {
            id: 'attTnVL4ftWlnguV',
            url:
              'https://dl.airtable.com/.attachments/0088608b2818c4d551615f49f481837d/3a998324/pexels-photo-1571460.jpegautocompresscstinysrgbdpr1w500',
            filename:
              'pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            size: 23343,
            type: 'image/jpeg',
            thumbnails: {
              small: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/2ab4834fce26947789f4c8993190791d/b459e416',
                width: 56,
                height: 36,
              },
              large: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/d2e1b96e04f1f2023e5827c312d282a5/bc5c9e0d',
                width: 500,
                height: 321,
              },
              full: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/aa87575627dc668416437b2b4ba0668b/57c24dae',
                width: 3000,
                height: 3000,
              },
            },
          },
        ],
        'Project lead': {
          id: 'usr3VLLpygcI46Sh',
          email: 'katherineduh+collab10@demo.htable.com',
          name: 'Gal Samari',
        },
      },
      createdTime: '2020-06-11T01:28:33.000Z',
    },
    {
      id: 'recCb9L6BGFB7pNG',
      fields: {
        Name: 'EngineerU brand identity',
        Client: ['rec4qtJB1nWOUDxuR'],
        Category: 'Brand identity',
        Complete: true,
        'Project team': [
          {
            id: 'usrTv3LPZP3GYJ9K',
            email: 'katherineduh+collab4@demo.htable.com',
            name: 'Ash Quintana',
          },
          {
            id: 'usr8e9LJ8HSg29YV',
            email: 'katherineduh+collab26@demo.htable.com',
            name: 'Paris Fotiou',
          },
          {
            id: 'usru7jLm2cNhriKv',
            email: 'katherineduh+collab7@demo.htable.com',
            name: 'Cameron Toth',
          },
        ],
        'Due date': '2020-10-20',
        'Kickoff date': '2020-10-06',
        Notes:
          "EngineerU's popularity is only growing. In the first week following its launch in 2015, the website attracted an incredible 300,000 users, which has grown to encompass over 20 million programmers and coders today. EngineerU's user base represents an expansive demographic, with strong gender parity and users from all generations???a remarkable feat in the typically young, male tech industry.\n\n\nEngineerU's new brand identity is insired by the website's impressively diverse user base, with a simplified visual package that can take on many colors, designs, and forms, but with the website's core design principles and logo remaining consistent. This represents not only the website's wide demographic but also its many uses, from training to collaboration. \n",
        'Project lead': {
          id: 'usru7jLm2cNhriKv',
          email: 'katherineduh+collab7@demo.htable.com',
          name: 'Cameron Toth',
        },
      },
      createdTime: '2020-06-11T01:26:05.000Z',
    },
    {
      id: 'recHgyLZv69LZ0vw',
      fields: {
        Name: 'Gotham City Parks brand identity',
        Client: ['rec4At297dnigWM57'],
        Category: 'Brand identity',
        Complete: true,
        'Project team': [
          {
            id: 'usrSdmLY5GdbcZzg',
            email: 'katherineduh+collab23@demo.htable.com',
            name: 'Leslie Walker',
          },
          {
            id: 'usr6hWLRwNgmt3WW',
            email: 'katherineduh+collab35@demo.htable.com',
            name: 'Sam Epps',
          },
          {
            id: 'usru7jLm2cNhriKv',
            email: 'katherineduh+collab7@demo.htable.com',
            name: 'Cameron Toth',
          },
        ],
        'Due date': '2020-09-29',
        'Kickoff date': '2020-09-15',
        'Project lead': {
          id: 'usru7jLm2cNhriKv',
          email: 'katherineduh+collab7@demo.htable.com',
          name: 'Cameron Toth',
        },
      },
      createdTime: '2020-06-11T01:26:15.000Z',
    },
    {
      id: 'recORjL8MsiRs6jF',
      fields: {
        Name: 'Convertible 3000 laptop',
        Client: ['rec4kzvXH3hrA6qN4'],
        Category: 'Technology design',
        Complete: true,
        'Project team': [
          {
            id: 'usrSdmLY5GdbcZzg',
            email: 'katherineduh+collab23@demo.htable.com',
            name: 'Leslie Walker',
          },
          {
            id: 'usru7jLm2cNhriKv',
            email: 'katherineduh+collab7@demo.htable.com',
            name: 'Cameron Toth',
          },
          {
            id: 'usrArxLAcyNZQfxl',
            email: 'katherineduh+collab5@demo.htable.com',
            name: 'Bailey Mirza',
          },
        ],
        'Due date': '2020-10-04',
        'Kickoff date': '2020-09-20',
        'Project images': [
          {
            id: 'attTgBLFy8lACBO7',
            url:
              'https://dl.airtable.com/.attachments/b8865bae12c7de5b7ee492b3f41f4ec1/d2d08a39/pexels-photo-748777.jpegautocompresscstinysrgbdpr1w500',
            filename:
              'pexels-photo-748777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            size: 23603,
            type: 'image/jpeg',
            thumbnails: {
              small: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/b25bce87f45d62b530de0dc9c7270a2e/fd8cbfc6',
                width: 55,
                height: 36,
              },
              large: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/cc62cac0e31b9afb77bc016f91bdd58f/65987e62',
                width: 500,
                height: 328,
              },
              full: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/feb5ad68be0f8cf2310b8c6295699d24/d7752211',
                width: 3000,
                height: 3000,
              },
            },
          },
          {
            id: 'attXvNLE4zsjJjAV',
            url:
              'https://dl.airtable.com/.attachments/a91e2fab730954d67a206c6d73161dc3/813d53b8/pexels-photo-2047905.jpegautocompresscstinysrgbdpr1w500',
            filename:
              'pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            size: 15022,
            type: 'image/jpeg',
            thumbnails: {
              small: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/0b0f3d175162f94684d2f29fd4749075/f9c0730a',
                width: 24,
                height: 36,
              },
              large: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/5af480f56914034ca652b6d8fc8abe40/82cf2162',
                width: 500,
                height: 750,
              },
              full: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/39b42b997d2834bc58d11faa300651e0/60aed9c7',
                width: 3000,
                height: 3000,
              },
            },
          },
        ],
        'Project lead': {
          id: 'usrArxLAcyNZQfxl',
          email: 'katherineduh+collab5@demo.htable.com',
          name: 'Bailey Mirza',
        },
      },
      createdTime: '2020-06-11T01:55:41.000Z',
    },
    {
      id: 'recUUzLUGXIjdtwX',
      fields: {
        Name: 'RITI media lab logo',
        Client: ['rec42SW7MyyOvKu1J'],
        Category: 'Industrial design',
        Complete: true,
        'Project team': [
          {
            id: 'usrTv3LPZP3GYJ9K',
            email: 'katherineduh+collab4@demo.htable.com',
            name: 'Ash Quintana',
          },
          {
            id: 'usru7jLm2cNhriKv',
            email: 'katherineduh+collab7@demo.htable.com',
            name: 'Cameron Toth',
          },
          {
            id: 'usrSdmLY5GdbcZzg',
            email: 'katherineduh+collab23@demo.htable.com',
            name: 'Leslie Walker',
          },
        ],
        'Due date': '2020-10-31',
        'Kickoff date': '2020-10-17',
        'Project lead': {
          id: 'usrSdmLY5GdbcZzg',
          email: 'katherineduh+collab23@demo.htable.com',
          name: 'Leslie Walker',
        },
      },
      createdTime: '2020-06-11T01:30:11.000Z',
    },
    {
      id: 'recVevLSwzBRtLWp',
      fields: {
        Name: 'New Door brand identity',
        Client: ['rec4aJj1xLW0T4UmR'],
        Category: 'Brand identity',
        Complete: true,
        'Project team': [
          {
            id: 'usrTv3LPZP3GYJ9K',
            email: 'katherineduh+collab4@demo.htable.com',
            name: 'Ash Quintana',
          },
          {
            id: 'usr6hWLRwNgmt3WW',
            email: 'katherineduh+collab35@demo.htable.com',
            name: 'Sam Epps',
          },
          {
            id: 'usrQjmLTBxfXNmmR',
            email: 'katherineduh+collab16@demo.htable.com',
            name: 'Jordan Peretz',
          },
          {
            id: 'usrArxLAcyNZQfxl',
            email: 'katherineduh+collab5@demo.htable.com',
            name: 'Bailey Mirza',
          },
        ],
        'Due date': '2020-10-09',
        'Kickoff date': '2020-09-25',
        'Project lead': {
          id: 'usrQjmLTBxfXNmmR',
          email: 'katherineduh+collab16@demo.htable.com',
          name: 'Jordan Peretz',
        },
      },
      createdTime: '2020-06-11T01:55:44.000Z',
    },
    {
      id: 'recYAyLvVMB2QISF',
      fields: {
        Name: 'Premier utility bike',
        Client: ['rec4nujlm56efsUdg'],
        Category: 'Industrial design',
        'Project team': [
          {
            id: 'usrpEyLytTJ95a2L',
            email: 'katherineduh+collab37@demo.htable.com',
            name: 'Skyler Xu',
          },
          {
            id: 'usr3VLLpygcI46Sh',
            email: 'katherineduh+collab10@demo.htable.com',
            name: 'Gal Samari',
          },
          {
            id: 'usr8e9LJ8HSg29YV',
            email: 'katherineduh+collab26@demo.htable.com',
            name: 'Paris Fotiou',
          },
        ],
        'Due date': '2020-10-18',
        'Kickoff date': '2020-10-04',
        Notes:
          'Washington Trek is a nonprofit organization with the mission of promoting bike-riding across Amrica. Each year, it hosts a national competition in its base city of Seattle for bike engineers to build the ultimate bicycle???one that can handle both rigorous terrain and daily road use, while also ensuring comfort and style.\n',
        'Project images': [
          {
            id: 'attGaALlHOs7JRqg',
            url:
              'https://dl.airtable.com/.attachments/4ba2255223dd83ff7da2674336424f17/f90573d8/pexels-photo-100582.jpegautocompresscstinysrgbdpr1w500',
            filename:
              'pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            size: 47191,
            type: 'image/jpeg',
            thumbnails: {
              small: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/d63b03959edf2c354c0edb409fa67922/e9e534cd',
                width: 54,
                height: 36,
              },
              large: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/97a778a9188e5d0e9133c7c0690f95c9/072997bb',
                width: 500,
                height: 333,
              },
              full: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/6023f985b6af512d573aae03ba9d452f/cf0c501e',
                width: 3000,
                height: 3000,
              },
            },
          },
        ],
        'Project lead': {
          id: 'usr3VLLpygcI46Sh',
          email: 'katherineduh+collab10@demo.htable.com',
          name: 'Gal Samari',
        },
      },
      createdTime: '2020-06-11T01:28:23.000Z',
    },
    {
      id: 'recdNoLTzvXujwos',
      fields: {
        Name: 'Lemon headband',
        Client: ['rec4dJ0bUM7oEPmUC'],
        Category: 'Technology design',
        'Project team': [
          {
            id: 'usr6hWLRwNgmt3WW',
            email: 'katherineduh+collab35@demo.htable.com',
            name: 'Sam Epps',
          },
          {
            id: 'usru7jLm2cNhriKv',
            email: 'katherineduh+collab7@demo.htable.com',
            name: 'Cameron Toth',
          },
          {
            id: 'usrSdmLY5GdbcZzg',
            email: 'katherineduh+collab23@demo.htable.com',
            name: 'Leslie Walker',
          },
        ],
        'Due date': '2020-11-01',
        'Kickoff date': '2020-10-18',
        'Project lead': {
          id: 'usrSdmLY5GdbcZzg',
          email: 'katherineduh+collab23@demo.htable.com',
          name: 'Leslie Walker',
        },
        Tasks: ['rec4t6NajB8jJArLb', 'rec2gFlWEd1DfQdlC'],
      },
      createdTime: '2020-06-11T01:30:22.000Z',
    },
    {
      id: 'reciuVL47rdcQgL8',
      fields: {
        Name: 'Coffee packaging',
        Client: ['rec47p4vobI32qiWd'],
        Category: 'Brand identity',
        'Project team': [
          {
            id: 'usrSdmLY5GdbcZzg',
            email: 'katherineduh+collab23@demo.htable.com',
            name: 'Leslie Walker',
          },
          {
            id: 'usrQjmLTBxfXNmmR',
            email: 'katherineduh+collab16@demo.htable.com',
            name: 'Jordan Peretz',
          },
          {
            id: 'usr6hWLRwNgmt3WW',
            email: 'katherineduh+collab35@demo.htable.com',
            name: 'Sam Epps',
          },
          {
            id: 'usr8e9LJ8HSg29YV',
            email: 'katherineduh+collab26@demo.htable.com',
            name: 'Paris Fotiou',
          },
        ],
        'Due date': '2020-10-30',
        'Kickoff date': '2020-10-16',
        'Project images': [
          {
            id: 'att79JLKzQZoZjHr',
            url:
              'https://dl.airtable.com/.attachments/0e97912b0f6dd01e248b0f6d5edeb945/a2685498/pexels-photo-1251175.jpegautocompresscstinysrgbdpr1w500',
            filename:
              'pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            size: 28912,
            type: 'image/jpeg',
            thumbnails: {
              small: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/5752aef052b699a7533d7d2492887e12/9de0961e',
                width: 49,
                height: 36,
              },
              large: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/e11f4f47f964e021033096a0e53f280d/80d1c4ef',
                width: 500,
                height: 365,
              },
              full: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/f70053b6e710fffc1e8020a4577854f9/c1d6f818',
                width: 3000,
                height: 3000,
              },
            },
          },
          {
            id: 'attqgOLisKdH8Y0a',
            url:
              'https://dl.airtable.com/.attachments/9e83083970f69404691da2cddb80204e/3e9de30e/pexels-photo.jpgautocompresscstinysrgbdpr1w500',
            filename: 'pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            size: 50181,
            type: 'image/jpeg',
            thumbnails: {
              small: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/e3d5257beb2455451ec098f306ab7004/8e119e09',
                width: 54,
                height: 36,
              },
              large: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/86b30fcfc17f5ad7348b5f0ba8dc7a6c/537dc94c',
                width: 500,
                height: 333,
              },
              full: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/9753fb1c9814d89d91bd061bd3a2a3e1/de586a53',
                width: 3000,
                height: 3000,
              },
            },
          },
          {
            id: 'attEbzLKtfqQP1uI',
            url:
              'https://dl.airtable.com/.attachments/95d970855a00bc0c7c9f5c950dae4547/3b8b602a/pexels-photo-585750.jpegautocompresscstinysrgbdpr1w500',
            filename:
              'pexels-photo-585750.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            size: 22991,
            type: 'image/jpeg',
            thumbnails: {
              small: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/49a3e548e3ff4503382a3e5c8c73586a/aa310c9b',
                width: 54,
                height: 36,
              },
              large: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/eacc6d9ab5c115a3ce639f3456798842/30b8e36e',
                width: 500,
                height: 333,
              },
              full: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/ceb846dff19ba4ff5ff6a913e756e1ad/d1df6f57',
                width: 3000,
                height: 3000,
              },
            },
          },
        ],
        'Project lead': {
          id: 'usr8e9LJ8HSg29YV',
          email: 'katherineduh+collab26@demo.htable.com',
          name: 'Paris Fotiou',
        },
        Tasks: ['rec4RKjDX27ROfc3t'],
      },
      createdTime: '2020-06-11T01:19:14.000Z',
    },
    {
      id: 'recm1tLJ9nbf5nN4',
      fields: {
        Name: 'HGH injection device',
        Client: ['rec47E3KRY2poUeav'],
        Category: 'Healthcare design',
        Complete: true,
        'Project team': [
          {
            id: 'usrSdmLY5GdbcZzg',
            email: 'katherineduh+collab23@demo.htable.com',
            name: 'Leslie Walker',
          },
          {
            id: 'usr3VLLpygcI46Sh',
            email: 'katherineduh+collab10@demo.htable.com',
            name: 'Gal Samari',
          },
          {
            id: 'usr8e9LJ8HSg29YV',
            email: 'katherineduh+collab26@demo.htable.com',
            name: 'Paris Fotiou',
          },
        ],
        'Due date': '2020-10-19',
        'Kickoff date': '2020-10-05',
        Notes:
          'Healthcare giant Avi Gilly and Company has announced plans to market a human growth hormone (HGH) injection device. There are many reasons why one may seek HGH therapy, from hormone deficiencies to chronic kidney disease. his new design aims to make it quicker, simpler, and less painful for HGH therapy patients to receive their injections.\n',
        'Project lead': {
          id: 'usr3VLLpygcI46Sh',
          email: 'katherineduh+collab10@demo.htable.com',
          name: 'Gal Samari',
        },
      },
      createdTime: '2020-06-11T01:28:44.000Z',
    },
    {
      id: 'recpBuLHxpxZr18G',
      fields: {
        Name: 'CubePad',
        Client: ['rec4kzvXH3hrA6qN4'],
        Category: 'Technology design',
        Complete: true,
        'Project team': [
          {
            id: 'usrTv3LPZP3GYJ9K',
            email: 'katherineduh+collab4@demo.htable.com',
            name: 'Ash Quintana',
          },
          {
            id: 'usrSdmLY5GdbcZzg',
            email: 'katherineduh+collab23@demo.htable.com',
            name: 'Leslie Walker',
          },
          {
            id: 'usrArxLAcyNZQfxl',
            email: 'katherineduh+collab5@demo.htable.com',
            name: 'Bailey Mirza',
          },
        ],
        'Due date': '2020-10-25',
        'Kickoff date': '2020-10-11',
        'Project images': [
          {
            id: 'attLz2L01cE40JRM',
            url:
              'https://dl.airtable.com/.attachments/c8043687faa0e148efb9210a03dcc826/29d81e2d/pexels-photo-2363239.jpegautocompresscstinysrgbdpr1w500',
            filename:
              'pexels-photo-2363239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            size: 23172,
            type: 'image/jpeg',
            thumbnails: {
              small: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/a47f8f55cfa4d7fba6054d6828d8ecee/0bb678a5',
                width: 55,
                height: 36,
              },
              large: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/6d7276b8daef61b8173df4f7e7031857/554c9703',
                width: 500,
                height: 325,
              },
              full: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/715ae0eec10a927e844341427d2aaa1a/24f30293',
                width: 3000,
                height: 3000,
              },
            },
          },
          {
            id: 'att8GzL1sP8jpb9V',
            url:
              'https://dl.airtable.com/.attachments/a60fea29c46df8c0ed9c48870eda7f51/d0992f2c/pexels-photo-221185.jpegautocompresscstinysrgbdpr1w500',
            filename:
              'pexels-photo-221185.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            size: 16321,
            type: 'image/jpeg',
            thumbnails: {
              small: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/e17f93e59698900a1b02e37583846e90/828d762a',
                width: 54,
                height: 36,
              },
              large: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/022fe8c1f73072dbcb9317af0f07b141/30956a9c',
                width: 500,
                height: 333,
              },
              full: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/9fa576b1663833ed98aea9d222d7e196/c8dd659b',
                width: 3000,
                height: 3000,
              },
            },
          },
        ],
        'Project lead': {
          id: 'usrArxLAcyNZQfxl',
          email: 'katherineduh+collab5@demo.htable.com',
          name: 'Bailey Mirza',
        },
      },
      createdTime: '2020-06-11T01:55:39.000Z',
    },
    {
      id: 'recpMELoj1uFVuXX',
      fields: {
        Name: 'CMCA brand identity',
        Client: ['rec4ivw48crzFwF1c'],
        Category: 'Brand identity',
        'Project team': [
          {
            id: 'usr6hWLRwNgmt3WW',
            email: 'katherineduh+collab35@demo.htable.com',
            name: 'Sam Epps',
          },
          {
            id: 'usrpEyLytTJ95a2L',
            email: 'katherineduh+collab37@demo.htable.com',
            name: 'Skyler Xu',
          },
          {
            id: 'usr8e9LJ8HSg29YV',
            email: 'katherineduh+collab26@demo.htable.com',
            name: 'Paris Fotiou',
          },
          {
            id: 'usr3VLLpygcI46Sh',
            email: 'katherineduh+collab10@demo.htable.com',
            name: 'Gal Samari',
          },
        ],
        'Due date': '2020-11-07',
        'Kickoff date': '2020-10-24',
        'Project images': [
          {
            id: 'atteiDLfdCQopiu6',
            url:
              'https://dl.airtable.com/.attachments/8cf450eb8b46c2b7e2107b29aa6a2c82/21363d9c/pexels-photo-137038.jpegautocompresscstinysrgbdpr1w500',
            filename:
              'pexels-photo-137038.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            size: 55384,
            type: 'image/jpeg',
            thumbnails: {
              small: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/8a27528cd943d361f9a0d9db8b4d8e94/2dea5e10',
                width: 36,
                height: 36,
              },
              large: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/5396af6157b8f41c38cafec176a30996/2c7c3372',
                width: 500,
                height: 500,
              },
              full: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/9f1c1312848a132a9f19449c6b0fa168/2e6c1c29',
                width: 3000,
                height: 3000,
              },
            },
          },
          {
            id: 'attm5HL4msQkfxvz',
            url:
              'https://dl.airtable.com/.attachments/633b1fa6dcf9dcb241212f0f4e3f6cbd/864ac88b/pexels-photo-2261165.jpegautocompresscstinysrgbdpr1w500',
            filename:
              'pexels-photo-2261165.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            size: 22616,
            type: 'image/jpeg',
            thumbnails: {
              small: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/1c2e05b0703493aa2e52dd9018055356/cf985044',
                width: 26,
                height: 36,
              },
              large: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/edced4962790a93591855336743be859/e48bafa5',
                width: 500,
                height: 700,
              },
              full: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/66a5299c93a50f472133919c0b726801/b17ab3f3',
                width: 3000,
                height: 3000,
              },
            },
          },
          {
            id: 'attzYwLMm8HBTgqK',
            url:
              'https://dl.airtable.com/.attachments/1e9e22ed12a713305fccf0da8c6e5633/fd2007b0/pexels-photo-220694.jpegautocompresscstinysrgbdpr1w500',
            filename:
              'pexels-photo-220694.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            size: 13675,
            type: 'image/jpeg',
            thumbnails: {
              small: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/1c5386ae2070ebf1211281e423dc2fd2/932c86fa',
                width: 54,
                height: 36,
              },
              large: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/85dd2257a505276ae275bdcc8b439afb/3a9c70f8',
                width: 500,
                height: 333,
              },
              full: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/5b68cebcac5344c14354839ecb400b13/4071fa28',
                width: 3000,
                height: 3000,
              },
            },
          },
        ],
        'Project lead': {
          id: 'usr3VLLpygcI46Sh',
          email: 'katherineduh+collab10@demo.htable.com',
          name: 'Gal Samari',
        },
      },
      createdTime: '2020-06-11T01:28:07.000Z',
    },
    {
      id: 'recwylLkoTl62RMl',
      fields: {
        Name: 'Locax notebook computer',
        Client: ['rec4kzvXH3hrA6qN4'],
        Category: 'Technology design',
        Complete: true,
        'Project team': [
          {
            id: 'usrTv3LPZP3GYJ9K',
            email: 'katherineduh+collab4@demo.htable.com',
            name: 'Ash Quintana',
          },
          {
            id: 'usrQjmLTBxfXNmmR',
            email: 'katherineduh+collab16@demo.htable.com',
            name: 'Jordan Peretz',
          },
          {
            id: 'usrArxLAcyNZQfxl',
            email: 'katherineduh+collab5@demo.htable.com',
            name: 'Bailey Mirza',
          },
        ],
        'Due date': '2020-10-17',
        'Kickoff date': '2020-10-03',
        'Project images': [
          {
            id: 'attSu2LjSz8Xl5Qg',
            url:
              'https://dl.airtable.com/.attachments/c2ece3b1d57e489bcd2fdffddab6d006/a58118f9/coffee-desk-laptop-notebook.jpgautocompresscstinysrgbdpr1w500',
            filename:
              'coffee-desk-laptop-notebook.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            size: 17787,
            type: 'image/jpeg',
            thumbnails: {
              small: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/d4391863eeb81cd4524434056c792ed3/b8c4a3a2',
                width: 54,
                height: 36,
              },
              large: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/53cec346c5de8be1d7943c0fdb631868/97bbeeb1',
                width: 500,
                height: 333,
              },
              full: {
                url:
                  'https://dl.airtable.com/.attachmentThumbnails/cdf300d3616f9e32f00e4bc6b554c4e7/acca8962',
                width: 3000,
                height: 3000,
              },
            },
          },
        ],
        'Project lead': {
          id: 'usrArxLAcyNZQfxl',
          email: 'katherineduh+collab5@demo.htable.com',
          name: 'Bailey Mirza',
        },
      },
      createdTime: '2020-06-11T01:55:36.000Z',
    },
  ] as TestRecord[],
}
