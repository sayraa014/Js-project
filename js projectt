const NFTs = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _haircolour,_dresstype) {
    const NFT =
    {
        
"name": _name,
"haircolour": _haircolour,
"dresstype": _dresstype

    }
    NFTs.push(NFT);
    console.log("Minted:" + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for(let i = 0; i < NFTs.length; i++) {
    console.log("NFT: \t\t" + (i+1));
    console.log("name: \t\t" + NFTs[i].name);
    console.log("haircolour: " + NFTs[i].haircolour);
    console.log("dresstype: " + NFTs[i].dresstype);
    console.log("------------------");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n" +NFTs.length);
}

// call your functions below this line
	mintNFT("Sanjana", "Blue", "long dress"); 
	mintNFT("Thana", "black",  "short dress");
	mintNFT("tina", "brown", "traditional dress");
listNFTs();
getTotalSupply()
