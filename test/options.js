var expect = require("chai").expect;
var util   = require("./util");



describe("Options", function()
{
	/*it.only("BUILD FILES", function(done)
	{
		require("async").parallel(
		[
			function(callback)
			{
				// Container expected SVG result
				util.run(
				{
					options: { folder:util.resolvePath("2-frames/opaque/gif"), export:util.resolvePath("2-frames/opaque/gif-expected-export-(contained).svg"), contain:true },
					callback: callback
				});
			}
		],
		function(error)
		{
			done();
		});
	});*/
	
	
	
	it("contain", function(done)
	{
		// Compare size to expected SVG result (unminified and contained SMIL)
		util.run(
		{
			options: { folder:util.resolvePath("2-frames/opaque/gif"), export:true, contain:true },
			expected: "2-frames/opaque/gif-expected-export-(contained).svg",
			callback: function(error, result, expectedResult)
			{
				expect(result.export).to.equal( expectedResult.toString() );
				done();
			}
		});
	});
	
	
	
	it("css-export", function(done)
	{
		// Compare size to expected SVG result (unminified SMIL)
		util.run(
		{
			options: { folder:util.resolvePath("2-frames/opaque/gif"), export:true, "css-export":true },
			expected: "2-frames/opaque/gif-expected-export.svg",
			callback: function(error, result, expectedResult)
			{
				expect( util.sizeOf(result.export) ).to.be.above( util.sizeOf(expectedResult) );
				done();
			}
		});
	});
});
