/* Base Data */

// Records

/// List records
export const listRecordsResponse = {
  "records": [
    {
      "createdTime": "2022-09-12T21:03:48.000Z",
      "fields": {
        "Address": "333 Post St",
        "Name": "Union Square",
        "Visited": true
      },
      "id": "rec560UJdUtocSouk"
    },
    {
      "createdTime": "2022-09-12T21:03:48.000Z",
      "fields": {
        "Address": "1 Ferry Building",
        "Name": "Ferry Building"
      },
      "id": "rec3lbPRG4aVqkeOQ"
    }
  ]
}


/// Get Record
export const getRecordResponse = {
  "createdTime": "2022-09-12T21:03:48.000Z",
  "fields": {
    "Address": "333 Post St",
    "Name": "Union Square",
    "Visited": true
  },
  "id": "rec560UJdUtocSouk"
}

/// Update multiple records

export const updateMultipleRecordsResponse = {
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
      "createdTime": "2022-09-12T21:03:48.000Z",
      "fields": {
        "Address": "1 Ferry Building",
        "Name": "Ferry Building",
        "Visited": true
      },
      "id": "rec3lbPRG4aVqkeOQ"
    }
  ]
}

export const updateMultipleRecordsUpsertResponse = {
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
}

/// Create records
export const createRecordsResponse = {
  "records": [
    {
      "createdTime": "2022-09-12T21:03:48.000Z",
      "fields": {
        "Address": "333 Post St",
        "Name": "Union Square",
        "Visited": true
      },
      "id": "rec560UJdUtocSouk"
    },
    {
      "createdTime": "2022-09-12T21:03:48.000Z",
      "fields": {
        "Address": "1 Ferry Building",
        "Name": "Ferry Building"
      },
      "id": "rec3lbPRG4aVqkeOQ"
    }
  ]
}

/// Create record
export const createRecordResponse = {
  "createdTime": "2022-09-12T21:03:48.000Z",
  "fields": {
    "Address": "333 Post St",
    "Name": "Union Square",
    "Visited": true
  },
  "id": "rec560UJdUtocSouk"
}

/// Delete multiple records
export const deleteMultipleRecordsResponse = {
  "records": [
    {
      "deleted": true,
      "id": "rec560UJdUtocSouk"
    },
    {
      "deleted": true,
      "id": "rec3lbPRG4aVqkeOQ"
    }
  ]
}

/// Delete record
export const deleteRecordResponse = {
  "deleted": true,
  "id": "rec560UJdUtocSouk"
}