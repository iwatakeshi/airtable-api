import { Scope } from "nock";
import { API_ENDPOINT_SYNC_ID, API_VERSION, BASE_ID, RECORD_ID, TABLE_NAME } from './constants'
import { createRecordResponse, createRecordsResponse, deleteMultipleRecordsResponse, deleteRecordResponse, getRecordResponse, listRecordsResponse, updateMultipleRecordsResponse } from "./responses";
export function mockRecordsApi(scope: Scope) {
  return scope
    // List Records
    .get(`/${API_VERSION}/${BASE_ID}/${TABLE_NAME}`)
    .reply(200, listRecordsResponse)
    // Get Records
    .get(`/${API_VERSION}/${BASE_ID}/${TABLE_NAME}/${RECORD_ID}`)
    .reply(200, getRecordResponse)
    // Update multiple records
    .patch(`/${API_VERSION}/${BASE_ID}/${TABLE_NAME}`)
    .reply(200, updateMultipleRecordsResponse)
    // Create records
    .post(`/${API_VERSION}/${BASE_ID}/${TABLE_NAME}`)
    .reply(200, createRecordsResponse)
    // Create record
    .post(`/${API_VERSION}/${BASE_ID}/${TABLE_NAME}`)
    .reply(200, createRecordResponse)
    // Delete record
    .delete(`/${API_VERSION}/${BASE_ID}/${TABLE_NAME}/${RECORD_ID}`)
    .reply(200, deleteRecordResponse)
    // Delete multiple records
    .delete(`/${API_VERSION}/${BASE_ID}/${TABLE_NAME}`)
    .reply(200, deleteMultipleRecordsResponse)
    // Sync CSV data
    .post(`/${API_VERSION}/${BASE_ID}/${TABLE_NAME}/sync/${API_ENDPOINT_SYNC_ID}`)
    .reply(200)
}