/*****************************************************************************/
/*  Client and Server Methods */
/*****************************************************************************/

Meteor.methods({
  'readFile': function () {
		var text = Assets.getText("test.xml");
		// text.xml present in private folder so that it gets added to server's assets.
		// .meteor/local/build/programs/server/assets
		return text;
	},
	'parseXML': function(XMLPayload) {
		var parser = Meteor.npmRequire('xml2json'); //initialise parser to parse XML to JSON
		var jsonText = parser.toJson(XMLPayload); //returns a string containing the JSON structure by default
		var json = JSON.parse(jsonText);
		return json;
	},
	'XML_2_JSON': function(){
		var xmlPayload = Meteor.call('readFile');
		console.log(xmlPayload);

		var json = Meteor.call('parseXML', xmlPayload);
		console.log(json);

		XML_Payload.insert(json);
	}
});