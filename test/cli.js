var expect = require("chai").expect;
var util   = require("./util");



describe("Command line", function()
{
	it.skip("should convert", function(done)
	{
		var input  = __dirname+"/simple/test.svg";
		var output = __dirname+"/simple/test_output.svg";
		
		//util.shell(["--input",input,"--output",output], function(error, stdout, stderr)
		util.shell(["--help"], function(error, stdout, stderr)
		{
			console.log(stdout);
			
			// Remove file
			//if (!error) fs.unlinkSync(output);
			
			//expect(error).to.be.null;
			
			done();
		});
	});
});