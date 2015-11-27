/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
	'received_xml': function(){
		return XML_Payload.findOne({});
	},
	'CustomerInformtion': function(){
		var json_obj = XML_Payload.findOne({});
		return json_obj.Payload.CustomerInformation
	},
	'AgentInformtion': function(){
		var json_obj = XML_Payload.findOne({});
		return json_obj.Payload.AgentInformation
	}
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
});

Template.Home.onDestroyed(function () {
});
