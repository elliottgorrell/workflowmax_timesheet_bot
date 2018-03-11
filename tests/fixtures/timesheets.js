module.exports = {
  "response": `
    <Response api-method="List">
    <Status>OK</Status>
    <Times>
        <Time>
            <ID>156350170</ID>
            <Job>
                <ID>J000001</ID>
                <Name>Internal Time</Name>
            </Job>
            <Task>
                <ID>85912648</ID>
                <Name>Internal Meetings</Name>
            </Task>
            <Staff>
                <ID>587121</ID>
                <Name>Elliott Gorrell</Name>
            </Staff>
            <Date>2018-01-24T00:00:00</Date>
            <Minutes>480</Minutes>
            <Note>Test data</Note>
            <Billable>false</Billable>
        </Time>
        <Time>
            <ID>156350210</ID>
            <Job>
                <ID>J000001</ID>
                <Name>Internal Time</Name>
            </Job>
            <Task>
                <ID>85912648</ID>
                <Name>Internal Meetings</Name>
            </Task>
            <Staff>
                <ID>587121</ID>
                <Name>Elliott Gorrell</Name>
            </Staff>
            <Date>2018-01-25T00:00:00</Date>
            <Minutes>480</Minutes>
            <Note>Big Important Meetings</Note>
            <Billable>false</Billable>
        </Time>
    </Times>
</Response>
`,
  expected: {
    Time: [
      {
        "ID": "156350170",
        "Job": {
          "ID": "J000001",
          "Name": "Internal Time"
        },
        "Task": {
          "ID": "85912648",
          "Name": "Internal Meetings"
        },
        "Staff": {
          "ID": "587121",
          "Name": "Elliott Gorrell"
        },
        "Date": "2018-01-24T00:00:00",
        "Minutes": "480",
        "Note": "Test data",
        "Billable": "false"
      },
      {
        "ID": "156350210",
        "Job": {
          "ID": "J000001",
          "Name": "Internal Time"
        },
        "Task": {
          "ID": "85912648",
          "Name": "Internal Meetings"
        },
        "Staff": {
          "ID": "587121",
          "Name": "Elliott Gorrell"
        },
        "Date": "2018-01-25T00:00:00",
        "Minutes": "480",
        "Note": "Big Important Meetings",
        "Billable": "false"
      }
    ]
  }

}
