$(function() {
    $('#exampleInputFile').change(function() {
        var file = this.files[0];
        name = file.name;
        var size = file.size;
        var type = file.type;
        console.log(type);
        if (type != "application/pdf") {
            $("#exampleInputFile").val("");
            alert("upload a pdf file");
        } else {
            $("#submit_form").removeProp("disabled");
        }
    });

    $('#submit_form').click(function(e) {
        e.preventDefault();
        var orderjs;
		orderjs = {
				  DocumentExpiryHours: xxxxx,
				  MailNotifyID: "xxxxx",
				  CustomeData: "[         {             \"FileName\":\"Sample form all\",             \"TotalPages\":5,             \"TotalSigners\":2,             \"Signers\":[                 1,                 2             ],             \"Signatures\":[                 {                     \"PageNumber\":1,                     \"FieldName\":\"ESIGN_ESIGNFILE_SIGNER1_SIGN1\",                     \"Top\":61,                     \"Left\":242,                     \"Width\":250,                     \"Height\":50,                     \"FieldType\":0,                     \"FieldSize\":0,                     \"SignerIndex\":1,                     \"Offset\":0                 },                 {                     \"PageNumber\":1,                     \"FieldName\":\"ESIGN_ESIGNFILE_SIGNER1_SIGN2\",                     \"Top\":383,                     \"Left\":283,                     \"Width\":250,                     \"Height\":50,                     \"FieldType\":0,                     \"FieldSize\":0,                     \"SignerIndex\":1,                     \"Offset\":0                 },                 {                     \"PageNumber\":1,                     \"FieldName\":\"ESIGN_ESIGNFILE_SIGNER1_SIGN3\",                     \"Top\":575,                     \"Left\":289,                     \"Width\":250,                     \"Height\":50,                     \"FieldType\":0,                     \"FieldSize\":0,                     \"SignerIndex\":1,                     \"Offset\":0                 },                 {                     \"PageNumber\":1,                     \"FieldName\":\"ESIGN_ESIGNFILE_SIGNER1_SIGN4\",                     \"Top\":205,                     \"Left\":352,                     \"Width\":250,                     \"Height\":50,                                   {                     \"PageNumber\":4,                     \"FieldName\":\"ESIGN_ESIGNFILE_SIGNER1_SIGN13\",                     \"Top\":343,                     \"Left\":274,                     \"Width\":250,                     \"Height\":50,                     \"FieldType\":1,                     \"FieldSize\":0,                     \"SignerIndex\":1,                     \"Offset\":0                 },                                    \"Height\":792,                     \"Width\":612                 },                 {                     \"PageNumber\":5,                     \"Height\":792,                     \"Width\":612                 }             ],             \"FileOrder\":1,             \"Typein \":false         }     ]",
				  ReturnReferenceURL: "xxxxx",
				  Subject: "xxxxx",
				  MailBody: "xxxxx",
				  Signatories: [
					{
					  FirstName: "xxxxx",
					  LastName: "xxxxx",
					  Mail: "xxxxx",
					  SecurityAnswer1: "xxxxx",
					  SecurityAnswer2: "xxxxx",
					  SecurityQuestion1: "xxxxx",
					  SecurityQuestion2: "xxxxx",
					  Status: 0
					}
				  ],
				  SignFiles: [
					{
					  FileName: "SAMPLE FORM ALL",
					  FileOrder: 1
					}
				  ]
				}
						
		
		
		orderjs.subject = ($("#subject").val());
		orderjs.MailBody = ($("#body_mail").val());
		orderjs.FirstName = ($("#first_name").val());
		orderjs.LastName  = ($("#last_name").val());
		orderjs.Mail = ($("#email").val());
		orderjs.SecurityAnswer1 = ($("#answer1").val());
		orderjs.SecurityAnswer2 = ($("#answer2").val());
		orderjs.FileName = file_name;
        
        var form = new FormData();
		form.append("order",JSON.stringify(orderjs) );
		form.append("SAMPLE FORM ALL", $('#exampleInputFile')[0].files[0]);

		var settings = {
		  "async": false,
		  "crossDomain": true,
		  "url": "xxxxx",
		  "method": "POST",
		  "headers": {
			"apikey": "xxx",
			"secretkey": "xxx"
		  },
		  "processData": false,
		  "contentType": false,
		  "mimeType": "multipart/form-data",
		  "data": form
		}

		$.ajax(settings).done(function (response) {
			response=JSON.parse(response)
			console.log(response.Order.OrderNumber);
		});
    });
});