var expect = require("chai").expect;
var util   = require("./util");



describe("Opaque sequence", function()
{
	/*it.only("BUILD FILES", function(done)
	{
		var outputs = 
		[
			function(callback)
			{
				// GIF :: expected SVG result
				util.run(
				{
					options: { input:util.resolvePath("2-frames/opaque/gif"), output:util.resolvePath("2-frames/opaque/gif-expected.svg") },
					callback: callback
				});
			},
			function(callback)
			{
				// JPG (lossy) :: expected SVG result
				util.run(
				{
					options: { input:util.resolvePath("2-frames/opaque/jpg/lossy"), output:util.resolvePath("2-frames/opaque/jpg-(lossy)-expected.svg") },
					callback: callback
				});
			},
			function(callback)
			{
				// JPG (near-lossless) :: expected SVG result
				util.run(
				{
					options: { input:util.resolvePath("2-frames/opaque/jpg/near-lossless"), output:util.resolvePath("2-frames/opaque/jpg-(near-lossless)-expected.svg") },
					callback: callback
				});
			},
			function(callback)
			{
				// PNG (8-bit) :: expected SVG result
				util.run(
				{
					options: { input:util.resolvePath("2-frames/opaque/png8"), output:util.resolvePath("2-frames/opaque/png8-expected.svg") },
					callback: callback
				});
			},
			function(callback)
			{
				// PNG (24-bit) :: expected SVG result
				util.run(
				{
					options: { input:util.resolvePath("2-frames/opaque/png24"), output:util.resolvePath("2-frames/opaque/png24-expected.svg") },
					callback: callback
				});
			}
		];
		
		var projects =
		[
			function(callback)
			{
				// GIF :: expected WFP result
				util.run(
				{
					options: { input:util.resolvePath("2-frames/opaque/gif"), output:util.resolvePath("2-frames/opaque/gif-expected.wfp"), project:true },
					callback: callback
				});
			},
			function(callback)
			{
				// JPG (lossy) :: expected WFP result
				util.run(
				{
					options: { input:util.resolvePath("2-frames/opaque/jpg/lossy"), output:util.resolvePath("2-frames/opaque/jpg-(lossy)-expected.wfp"), project:true },
					callback: callback
				});
			},
			function(callback)
			{
				// JPG (near-lossless) :: expected WFP result
				util.run(
				{
					options: { input:util.resolvePath("2-frames/opaque/jpg/near-lossless"), output:util.resolvePath("2-frames/opaque/jpg-(near-lossless)-expected.wfp"), project:true },
					callback: callback
				});
			},
			function(callback)
			{
				// PNG (8-bit) :: expected WFP result
				util.run(
				{
					options: { input:util.resolvePath("2-frames/opaque/png8"), output:util.resolvePath("2-frames/opaque/png8-expected.wfp"), project:true },
					callback: callback
				});
			},
			function(callback)
			{
				// PNG (24-bit) :: expected WFP result
				util.run(
				{
					options: { input:util.resolvePath("2-frames/opaque/png24"), output:util.resolvePath("2-frames/opaque/png24-expected.wfp"), project:true },
					callback: callback
				});
			}
		];
		
		require("async").parallel( outputs.concat(projects), function(){done()} );
	});*/
	
	
	
	describe("of GIFs", function()
	{
		it("should output unlossy and unminified SMIL", function(done)
		{
			// Compare to expected SVG result
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/gif"), output:true },
				expected: "2-frames/opaque/gif-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect(result).to.equal( expectedResult.toString() );
					done();
				}
			});
		});
		
		
		
		it("should output unlossy and unminified SMIL (from project)", function(done)
		{
			// Compare to expected SVG result
			util.run(
			{
				options: { inputProject:util.resolvePath("2-frames/opaque/gif-expected.wfp"), output:true },
				expected: "2-frames/opaque/gif-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect(result).to.equal( expectedResult.toString() );
					done();
				}
			});
		});
		
		
		
		it("should output unlossy and minified SMIL", function(done)
		{
			// Compare size to expected SVG result (unlossy and unminified SMIL)
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/gif"), output:true, minify:true },
				expected: "2-frames/opaque/gif-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect( util.sizeOf(result) ).to.be.below( util.sizeOf(expectedResult) );
					expect( util.sizeOf(result) ).to.be.above(700);	// size without images
					done();
				}
			});
		});
		
		
		
		it("should output unlossy and minified SMIL (from project)", function(done)
		{
			// Compare size to expected SVG result (unlossy and unminified SMIL)
			util.run(
			{
				options: { inputProject:util.resolvePath("2-frames/opaque/gif-expected.wfp"), output:true, minify:true },
				expected: "2-frames/opaque/gif-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect( util.sizeOf(result) ).to.be.below( util.sizeOf(expectedResult) );
					expect( util.sizeOf(result) ).to.be.above(700);	// size without images
					done();
				}
			});
		});
		
		
		
		it("should output lossy and unminified SMIL", function(done)
		{
			// Compare to expected SVG result (unlossy and unminified)
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/gif"), output:true, lossy:true },
				expected: "2-frames/opaque/gif-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect( util.sizeOf(result) ).to.be.below( util.sizeOf(expectedResult) );
					expect( util.sizeOf(result) ).to.be.above(700);	// size without images
					done();
				}
			});
		});
		
		
		
		it("should output lossy and unminified SMIL (from project)", function(done)
		{
			// Compare to expected SVG result (unlossy and unminified)
			util.run(
			{
				options: { inputProject:util.resolvePath("2-frames/opaque/gif-expected.wfp"), output:true, lossy:true },
				expected: "2-frames/opaque/gif-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect( util.sizeOf(result) ).to.be.below( util.sizeOf(expectedResult) );
					expect( util.sizeOf(result) ).to.be.above(700);	// size without images
					done();
				}
			});
		});
		
		
		
		it("should output lossy and minified SMIL", function(done)
		{
			// Nothing to compare to
			// Just check that it doesn't crash
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/gif"), output:true, lossy:true, minify:true },
				callback: function(error, result)
				{
					expect(error).to.be.null;
					done();
				}
			});
		});
		
		
		
		it("should output lossy and minified SMIL (from project)", function(done)
		{
			// Nothing to compare to
			// Just check that it doesn't crash
			util.run(
			{
				options: { inputProject:util.resolvePath("2-frames/opaque/gif-expected.wfp"), output:true, lossy:true, minify:true },
				callback: function(error, result)
				{
					expect(error).to.be.null;
					done();
				}
			});
		});
		
		
		
		it("should output an unminified project", function(done)
		{
			// Compare to expected WFP result
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/gif"), output:true, project:true },
				expected: "2-frames/opaque/gif-expected.wfp",
				callback: function(error, result, expectedResult)
				{
					expect(result).to.deep.equal(expectedResult);
					done();
				}
			});
		});
		
		
		
		// TODO :: try again with node 0.12 when gzip can have level:9 compression
		it.skip("should output a minified project", function(done)
		{
			// Compare to expected WFP result (unminified)
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/gif"), output:true, project:true, minify:true },
				expected: "2-frames/opaque/gif-expected.wfp",
				callback: function(error, result, expectedResult)
				{
					expect( util.sizeOf(result) ).to.be.below( util.sizeOf(expectedResult) );
					done();
				}
			});
		});
	});
	
	
	
	describe("of JPGs (lossy)", function()
	{
		it("should output unlossy and unminified SMIL", function(done)
		{
			// Compare to expected SVG result
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/jpg/lossy"), output:true },
				expected: "2-frames/opaque/jpg-(lossy)-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect(result).to.equal( expectedResult.toString() );
					done();
				}
			});
		});
		
		
		
		it("should output unlossy and unminified SMIL (from project)", function(done)
		{
			// Compare to expected SVG result
			util.run(
			{
				options: { inputProject:util.resolvePath("2-frames/opaque/jpg-(lossy)-expected.wfp"), output:true },
				expected: "2-frames/opaque/jpg-(lossy)-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect(result).to.equal( expectedResult.toString() );
					done();
				}
			});
		});
		
		
		
		it("should output unlossy and minified SMIL", function(done)
		{
			// Compare to expected SVG result (unlossy and unminified)
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/jpg/lossy"), output:true, minify:true },
				expected: "2-frames/opaque/jpg-(lossy)-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect( util.sizeOf(result) ).to.be.below( util.sizeOf(expectedResult) );
					expect( util.sizeOf(result) ).to.be.above(700);	// size without images
					done();
				}
			});
		});
		
		
		
		it("should output unlossy and minified SMIL (from project)", function(done)
		{
			// Compare to expected SVG result (unlossy and unminified)
			util.run(
			{
				options: { inputProject:util.resolvePath("2-frames/opaque/jpg-(lossy)-expected.wfp"), output:true, minify:true },
				expected: "2-frames/opaque/jpg-(lossy)-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect( util.sizeOf(result) ).to.be.below( util.sizeOf(expectedResult) );
					expect( util.sizeOf(result) ).to.be.above(700);	// size without images
					done();
				}
			});
		});
		
		
		
		it("should output lossy and unminified SMIL", function(done)
		{
			// Compare to expected SVG result (unlossy and unminified)
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/jpg/lossy"), output:true, lossy:true },
				expected: "2-frames/opaque/jpg-(lossy)-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect( util.sizeOf(result) ).to.be.below( util.sizeOf(expectedResult) );
					expect( util.sizeOf(result) ).to.be.above(700);	// size without images
					done();
				}
			});
		});
		
		
		
		it("should output lossy and unminified SMIL (from project)", function(done)
		{
			// Compare to expected SVG result (unlossy and unminified)
			util.run(
			{
				options: { inputProject:util.resolvePath("2-frames/opaque/jpg-(lossy)-expected.wfp"), output:true, lossy:true },
				expected: "2-frames/opaque/jpg-(lossy)-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect( util.sizeOf(result) ).to.be.below( util.sizeOf(expectedResult) );
					expect( util.sizeOf(result) ).to.be.above(700);	// size without images
					done();
				}
			});
		});
		
		
		
		it("should output lossy and minified SMIL", function(done)
		{
			// Nothing to compare to
			// Just check that it doesn't crash
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/jpg/lossy"), output:true, lossy:true, minify:true },
				callback: function(error, result)
				{
					expect(error).to.be.null;
					done();
				}
			});
		});
		
		
		
		it("should output lossy and minified SMIL (from project)", function(done)
		{
			// Nothing to compare to
			// Just check that it doesn't crash
			util.run(
			{
				options: { inputProject:util.resolvePath("2-frames/opaque/jpg-(lossy)-expected.wfp"), output:true, lossy:true, minify:true },
				callback: function(error, result)
				{
					expect(error).to.be.null;
					done();
				}
			});
		});
		
		
		
		it("should output an unminified project", function(done)
		{
			// Compare to expected WFP result
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/jpg/lossy"), output:true, project:true },
				expected: "2-frames/opaque/jpg-(lossy)-expected.wfp",
				callback: function(error, result, expectedResult)
				{
					expect(result).to.deep.equal(expectedResult);
					done();
				}
			});
		});
		
		
		
		it("should output a minified project", function(done)
		{
			// Compare to expected WFP result (unminified)
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/jpg/lossy"), output:true, project:true, minify:true },
				expected: "2-frames/opaque/jpg-(lossy)-expected.wfp",
				callback: function(error, result, expectedResult)
				{
					expect( util.sizeOf(result) ).to.be.below( util.sizeOf(expectedResult) );
					done();
				}
			});
		});
	});
	
	
	
	describe("of JPGs (near-lossless)", function()
	{
		it("should output unlossy and unminified SMIL", function(done)
		{
			// Compare to expected SVG result
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/jpg/near-lossless"), output:true },
				expected: "2-frames/opaque/jpg-(near-lossless)-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect(result).to.equal( expectedResult.toString() );
					done();
				}
			});
		});
		
		
		
		it("should output unlossy and unminified SMIL (from project)", function(done)
		{
			// Compare to expected SVG result
			util.run(
			{
				options: { inputProject:util.resolvePath("2-frames/opaque/jpg-(near-lossless)-expected.wfp"), output:true },
				expected: "2-frames/opaque/jpg-(near-lossless)-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect(result).to.equal( expectedResult.toString() );
					done();
				}
			});
		});
		
		
		
		it("should output unlossy and minified SMIL", function(done)
		{
			// Compare to expected SVG result (unlossy and unminified)
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/jpg/near-lossless"), output:true, minify:true },
				expected: "2-frames/opaque/jpg-(near-lossless)-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect( util.sizeOf(result) ).to.be.below( util.sizeOf(expectedResult) );
					expect( util.sizeOf(result) ).to.be.above(700);	// size without images
					done();
				}
			});
		});
		
		
		
		it("should output unlossy and minified SMIL (from project)", function(done)
		{
			// Compare to expected SVG result (unlossy and unminified)
			util.run(
			{
				options: { inputProject:util.resolvePath("2-frames/opaque/jpg-(near-lossless)-expected.wfp"), output:true, minify:true },
				expected: "2-frames/opaque/jpg-(near-lossless)-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect( util.sizeOf(result) ).to.be.below( util.sizeOf(expectedResult) );
					expect( util.sizeOf(result) ).to.be.above(700);	// size without images
					done();
				}
			});
		});
		
		
		
		it("should output lossy and unminified SMIL", function(done)
		{
			// Compare to expected SVG result (unlossy and unminified)
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/jpg/near-lossless"), output:true, lossy:true },
				expected: "2-frames/opaque/jpg-(near-lossless)-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect( util.sizeOf(result) ).to.be.below( util.sizeOf(expectedResult) );
					expect( util.sizeOf(result) ).to.be.above(700);	// size without images
					done();
				}
			});
		});
		
		
		
		it("should output lossy and unminified SMIL (from project)", function(done)
		{
			// Compare to expected SVG result (unlossy and unminified)
			util.run(
			{
				options: { inputProject:util.resolvePath("2-frames/opaque/jpg-(near-lossless)-expected.wfp"), output:true, lossy:true },
				expected: "2-frames/opaque/jpg-(near-lossless)-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect( util.sizeOf(result) ).to.be.below( util.sizeOf(expectedResult) );
					expect( util.sizeOf(result) ).to.be.above(700);	// size without images
					done();
				}
			});
		});
		
		
		
		it("should output lossy and minified SMIL", function(done)
		{
			// Nothing to compare to
			// Just check that it doesn't crash
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/jpg/near-lossless"), output:true, lossy:true, minify:true },
				callback: function(error, result)
				{
					expect(error).to.be.null;
					done();
				}
			});
		});
		
		
		
		it("should output lossy and minified SMIL (from project)", function(done)
		{
			// Nothing to compare to
			// Just check that it doesn't crash
			util.run(
			{
				options: { inputProject:util.resolvePath("2-frames/opaque/jpg-(near-lossless)-expected.wfp"), output:true, lossy:true, minify:true },
				callback: function(error, result)
				{
					expect(error).to.be.null;
					done();
				}
			});
		});
		
		
		
		it("should output an unminified project", function(done)
		{
			// Compare to expected WFP result
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/jpg/near-lossless"), output:true, project:true },
				expected: "2-frames/opaque/jpg-(near-lossless)-expected.wfp",
				callback: function(error, result, expectedResult)
				{
					expect(result).to.deep.equal(expectedResult);
					done();
				}
			});
		});
		
		
		
		it("should output a minified project", function(done)
		{
			// Compare to expected WFP result (unminified)
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/jpg/near-lossless"), output:true, project:true, minify:true },
				expected: "2-frames/opaque/jpg-(near-lossless)-expected.wfp",
				callback: function(error, result, expectedResult)
				{
					expect( util.sizeOf(result) ).to.be.below( util.sizeOf(expectedResult) );
					done();
				}
			});
		});
	});
	
	
	
	describe("of PNGs (8-bit)", function()
	{
		it("should output unlossy and unminified SMIL", function(done)
		{
			// Compare to expected SVG result
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/png8"), output:true },
				expected: "2-frames/opaque/png8-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect(result).to.equal( expectedResult.toString() );
					done();
				}
			});
		});
		
		
		
		it("should output unlossy and unminified SMIL (from project)", function(done)
		{
			// Compare to expected SVG result
			util.run(
			{
				options: { inputProject:util.resolvePath("2-frames/opaque/png8-expected.wfp"), output:true },
				expected: "2-frames/opaque/png8-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect(result).to.equal( expectedResult.toString() );
					done();
				}
			});
		});
		
		
		
		it("should output unlossy and minified SMIL", function(done)
		{
			// Compare to expected SVG result (unlossy and unminified)
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/png8"), output:true, minify:true },
				expected: "2-frames/opaque/png8-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect( util.sizeOf(result) ).to.be.below( util.sizeOf(expectedResult) );
					expect( util.sizeOf(result) ).to.be.above(700);	// size without images
					done();
				}
			});
		});
		
		
		
		it("should output unlossy and minified SMIL (from project)", function(done)
		{
			// Compare to expected SVG result (unlossy and unminified)
			util.run(
			{
				options: { inputProject:util.resolvePath("2-frames/opaque/png8-expected.wfp"), output:true, minify:true },
				expected: "2-frames/opaque/png8-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect( util.sizeOf(result) ).to.be.below( util.sizeOf(expectedResult) );
					expect( util.sizeOf(result) ).to.be.above(700);	// size without images
					done();
				}
			});
		});
		
		
		
		it("should output lossy and unminified SMIL", function(done)
		{
			// Compare to expected SVG result (unlossy and unminified)
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/png8"), output:true, lossy:true },
				expected: "2-frames/opaque/png8-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect( util.sizeOf(result) ).to.be.below( util.sizeOf(expectedResult) );
					expect( util.sizeOf(result) ).to.be.above(700);	// size without images
					done();
				}
			});
		});
		
		
		
		it("should output lossy and unminified SMIL (from project)", function(done)
		{
			// Compare to expected SVG result (unlossy and unminified)
			util.run(
			{
				options: { inputProject:util.resolvePath("2-frames/opaque/png8-expected.wfp"), output:true, lossy:true },
				expected: "2-frames/opaque/png8-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect( util.sizeOf(result) ).to.be.below( util.sizeOf(expectedResult) );
					expect( util.sizeOf(result) ).to.be.above(700);	// size without images
					done();
				}
			});
		});
		
		
		
		it("should output lossy and minified SMIL", function(done)
		{
			// Nothing to compare to
			// Just check that it doesn't crash
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/png8"), output:true, lossy:true, minify:true },
				callback: function(error, result)
				{
					expect(error).to.be.null;
					done();
				}
			});
		});
		
		
		
		it("should output lossy and minified SMIL (from project)", function(done)
		{
			// Nothing to compare to
			// Just check that it doesn't crash
			util.run(
			{
				options: { inputProject:util.resolvePath("2-frames/opaque/png8-expected.wfp"), output:true, lossy:true, minify:true },
				callback: function(error, result)
				{
					expect(error).to.be.null;
					done();
				}
			});
		});
		
		
		
		it("should output an unminified project", function(done)
		{
			// Compare to expected WFP result
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/png8"), output:true, project:true },
				expected: "2-frames/opaque/png8-expected.wfp",
				callback: function(error, result, expectedResult)
				{
					expect(result).to.deep.equal(expectedResult);
					done();
				}
			});
		});
		
		
		
		it("should output a minified project", function(done)
		{
			// Compare to expected WFP result (unminified)
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/png8"), output:true, project:true, minify:true },
				expected: "2-frames/opaque/png8-expected.wfp",
				callback: function(error, result, expectedResult)
				{
					expect( util.sizeOf(result) ).to.be.below( util.sizeOf(expectedResult) );
					done();
				}
			});
		});
	});
	
	
	
	describe("of PNGs (24-bit)", function()
	{
		it("should output lossless and unminified SMIL", function(done)
		{
			// Compare to expected SVG result
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/png24"), output:true },
				expected: "2-frames/opaque/png24-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect(result).to.equal( expectedResult.toString() );
					done();
				}
			});
		});
		
		
		
		it("should output lossless and unminified SMIL (from project)", function(done)
		{
			// Compare to expected SVG result
			util.run(
			{
				options: { inputProject:util.resolvePath("2-frames/opaque/png24-expected.wfp"), output:true },
				expected: "2-frames/opaque/png24-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect(result).to.equal( expectedResult.toString() );
					done();
				}
			});
		});
		
		
		
		it("should output lossless and minified SMIL", function(done)
		{
			// Compare to expected SVG result (lossless and unminified)
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/png24"), output:true, minify:true },
				expected: "2-frames/opaque/png24-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect( util.sizeOf(result) ).to.be.below( util.sizeOf(expectedResult) );
					expect( util.sizeOf(result) ).to.be.above(700);	// size without images
					done();
				}
			});
		});
		
		
		
		it("should output lossless and minified SMIL (from project)", function(done)
		{
			// Compare to expected SVG result (lossless and unminified)
			util.run(
			{
				options: { inputProject:util.resolvePath("2-frames/opaque/png24-expected.wfp"), output:true, minify:true },
				expected: "2-frames/opaque/png24-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect( util.sizeOf(result) ).to.be.below( util.sizeOf(expectedResult) );
					expect( util.sizeOf(result) ).to.be.above(700);	// size without images
					done();
				}
			});
		});
		
		
		
		it("should output lossy and unminified SMIL", function(done)
		{
			// TODO :: use cheerio to check image mimetypes?
			
			// Compare to expected SVG result (lossless and unminified)
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/png24"), output:true, lossy:true },
				expected: "2-frames/opaque/png24-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect( util.sizeOf(result) ).to.be.below( util.sizeOf(expectedResult) );
					expect( util.sizeOf(result) ).to.be.above(700);	// size without images
					done();
				}
			});
		});
		
		
		
		it("should output lossy and unminified SMIL (from project)", function(done)
		{
			// TODO :: use cheerio to check image mimetypes?
			
			// Compare to expected SVG result (lossless and unminified)
			util.run(
			{
				options: { inputProject:util.resolvePath("2-frames/opaque/png24-expected.wfp"), output:true, lossy:true },
				expected: "2-frames/opaque/png24-expected.svg",
				callback: function(error, result, expectedResult)
				{
					expect( util.sizeOf(result) ).to.be.below( util.sizeOf(expectedResult) );
					expect( util.sizeOf(result) ).to.be.above(700);	// size without images
					done();
				}
			});
		});
		
		
		
		it("should output lossy and minified SMIL", function(done)
		{
			// Nothing to compare to
			// Just check that it doesn't crash
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/png24"), output:true, lossy:true, minify:true },
				callback: function(error, result)
				{
					expect(error).to.be.null;
					done();
				}
			});
		});
		
		
		
		it("should output lossy and minified SMIL (from project)", function(done)
		{
			// Nothing to compare to
			// Just check that it doesn't crash
			util.run(
			{
				options: { inputProject:util.resolvePath("2-frames/opaque/png24-expected.wfp"), output:true, lossy:true, minify:true },
				callback: function(error, result)
				{
					expect(error).to.be.null;
					done();
				}
			});
		});
		
		
		
		it("should output an unminified project", function(done)
		{
			// Compare to expected WFP result
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/png24"), output:true, project:true },
				expected: "2-frames/opaque/png24-expected.wfp",
				callback: function(error, result, expectedResult)
				{
					expect(result).to.deep.equal(expectedResult);
					done();
				}
			});
		});
		
		
		
		it("should output a minified project", function(done)
		{
			// Compare to expected WFP result (unminified)
			util.run(
			{
				options: { input:util.resolvePath("2-frames/opaque/png24"), output:true, project:true, minify:true },
				expected: "2-frames/opaque/png24-expected.wfp",
				callback: function(error, result, expectedResult)
				{
					expect( util.sizeOf(result) ).to.be.below( util.sizeOf(expectedResult) );
					done();
				}
			});
		});
	});
});
