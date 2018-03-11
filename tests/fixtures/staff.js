module.exports = {

  response: `
    <Response>
      <Status>OK</Status>
      <StaffList>
        <Staff>
          <ID>1</ID>
          <Name>Jo Bloggs</Name>
          <Email>jo@bloggs.net</Email>
          <Phone />
          <Mobile />
          <Address />
        </Staff>
        <Staff>
          <ID>19</ID>
          <Name>John Smith</Name>
          <Email>john@smith.com</Email>
          <Phone />
          <Mobile />
          <Address />
        </Staff>
      </StaffList>
    </Response>
  `,

  expected: {
    Staff: [
      {
        ID: "1",
        Name: "Jo Bloggs",
        Email: "jo@bloggs.net",
        Phone: "",
        Mobile: "",
        Address: ""
      },
      {
        ID: "19",
        Name: "John Smith",
        Email: "john@smith.com",
        Phone: "",
        Mobile: "",
        Address: ""
      }
    ]
  }

}
