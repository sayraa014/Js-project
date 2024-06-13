const NFTS[]


function mintHFT (_name, _haircolour, _dresstype, _jewellery) {

const NFT - {

"name": _name,



"haircolour": _haircolour,



"dresstype": _dresstype,



"jewellery": _jewellery



}





console.log("Minted: "+_name);



}
Function listNFTs () {

	for(let i = 0; i < NFTs.length; i++) {
	
	• console.log("\nID:" + (i + 1);
	
	console.log("Name:" + NFTs[i].name);
	
	console.log("haircolor:" 40 + NFTs[i].eyeColor);
	
     console.log("dressType:" + NFTs[i].shirtType);
	
	console.log("jewellery" + NFTs[i].bling);
	
	}
	function getTotalSupply() {

		console.log("\n" + NFTs.length);
		
		/ call your functions below this line
		
		mintNFT("Sakshi", "Blue". "maxi", "Ear rings"); 
		
		intNFT("Samridhi", "white" "short dress" "necklace");
		
		intNFT("Thomson", "green",  "midi" "ring");
		
		intNFT("John", "pink" "short dress" "necklace");
		
		ListNFTs();
		
		getTotalSupply();

	}
