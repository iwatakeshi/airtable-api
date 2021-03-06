import { TestRecord } from './records'

export default [
  {
    fields: {
      Name: 'Coffee packaging',
      Client: ['recu7p4vobI32qiWd'],
      Category: 'Brand identity',
      'Project team': [
        {
          id: 'usrSdmrY5yGdbcZzg',
          email: 'katherineduh+collab23@demo.htable.com',
          name: 'Leslie Walker',
        },
        {
          id: 'usrQjmKTBNxfXNmmR',
          email: 'katherineduh+collab16@demo.htable.com',
          name: 'Jordan Peretz',
        },
        {
          id: 'usr6hWARwVNgmt3WW',
          email: 'katherineduh+collab35@demo.htable.com',
          name: 'Sam Epps',
        },
        {
          id: 'usr8e9aJ8jHSg29YV',
          email: 'katherineduh+collab26@demo.htable.com',
          name: 'Paris Fotiou',
        },
      ],
      'Due date': '2020-10-30',
      'Kickoff date': '2020-10-16',
      'Project images': [
        {
          url:
            'https://dl.airtable.com/.attachments/0e97912b0f6dd01e248b0f6d5edeb945/a2685498/pexels-photo-1251175.jpegautocompresscstinysrgbdpr1w500',
        },
        {
          url:
            'https://dl.airtable.com/.attachments/9e83083970f69404691da2cddb80204e/3e9de30e/pexels-photo.jpgautocompresscstinysrgbdpr1w500',
        },
        {
          url:
            'https://dl.airtable.com/.attachments/95d970855a00bc0c7c9f5c950dae4547/3b8b602a/pexels-photo-585750.jpegautocompresscstinysrgbdpr1w500',
        },
      ],
      'Project lead': {
        id: 'usr8e9aJ8jHSg29YV',
        email: 'katherineduh+collab26@demo.htable.com',
        name: 'Paris Fotiou',
      },
      Tasks: ['recMRKjDX27ROfc3t'],
    },
  },
  {
    fields: {
      Name: 'EngineerU brand identity',
      Client: ['recPqtJB1nWOUDxuR'],
      Category: 'Brand identity',
      Complete: true,
      'Project team': [
        {
          id: 'usrTv3tPZmP3GYJ9K',
          email: 'katherineduh+collab4@demo.htable.com',
          name: 'Ash Quintana',
        },
        {
          id: 'usr8e9aJ8jHSg29YV',
          email: 'katherineduh+collab26@demo.htable.com',
          name: 'Paris Fotiou',
        },
        {
          id: 'usru7j5m2lcNhriKv',
          email: 'katherineduh+collab7@demo.htable.com',
          name: 'Cameron Toth',
        },
      ],
      'Due date': '2020-10-20',
      'Kickoff date': '2020-10-06',
      Notes:
        "EngineerU's popularity is only growing. In the first week following its launch in 2015, the website attracted an incredible 300,000 users, which has g...",
      'Project lead': {
        id: 'usru7j5m2lcNhriKv',
        email: 'katherineduh+collab7@demo.htable.com',
        name: 'Cameron Toth',
      },
    },
  },
] as Omit<TestRecord, 'id' | 'createdTime'>[]
