var node = {
    id       : 0, // represented as number on node
	segment  : "segment", 
	sdate : "dd/mm/yyyy", // represented when node appears
	tenor : 10, // tenor left shown by decreasing circular bar on node
	amount : 100, // represented by size of node (for source nodes the amount of funds available is indicated by the size of the central element)
	Tier : 1, // represented by node color
	taxClass : "none", //represented by placement of node (nodes of the same tax class are grouped together)
	rate : 0.01, //source node only field 
	type : true
	/*Typical source/requirement node format*/
}

var link = {
	id : 0,
	requirement : 1,  // the node the link arrow points to
	source : 1, // the node the link arrow points from
	sdate : "dd/mm/yyyy",
	tenor : 20,
	amount: 50 // represented by the thickness of the link
	/*Typical link variable. The interest rate of the allocation is redpresented by the link color*/
}

function loadPage(namer){
	window.location = namer;
}

function showHelp(page){
	/*displays an informative pop up depending on the context in which the help button is pressed*/
}

function loadNodes(fName){
	/*Takes a .json file name and loads the data from it.
	Format to be finalised but will contain Source and requirement node info */
}

function loadLinks (fname){
	/*Takes a .json file name and loads the data from it.
	Format to be finalised but will contain Source and requirement link info */
}

