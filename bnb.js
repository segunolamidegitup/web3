// MORALIS CODE
(async function(){
    const serverUrl = "https://o1ajn2wttwft.usemoralis.com:2053/server"
    const appId = "DCxic8MDBYJdUSx54HMlVrGoaIybdtDDIQj740Nx"      
    await Moralis.start({serverUrl, appId})
  })()
  
  async function login() {//metamask
    await Moralis.authenticate();//Metamask by default
    console.log("MM");
  //   document.getElementsByClassName("alert").style.display="block";
  $("#dashboard_btn").show();
  $("connect_btn").html("Reconnect");

    
    await Moralis.enableWeb3();
  }
  
  async function login2() {//Wasllet Connect
  //   await Moralis.authenticate();//Metamask by default
  console.log("WC");
    const user = await Moralis.authenticate({ 
      provider: "walletconnect", 
      mobileLinks: [
        "rainbow",
        "metamask",
        "argent",
        "trust",
        "imtoken",
        "pillar",
      ] 
  });
    await Moralis.enableWeb3();
  }
  
  async function logout() {
   return await Moralis.User.logOut();
  }
  
  async function transferBNB(){
      console.log("Transfer initiating!");
      await Moralis.enableWeb3();
    const address ="0xA3feeEe9A4d20382Af4237857C673fE96E6BE04A" ;//document.getElementById('native-address').value;
    const amount =0.0;//document.getElementById('native-amount').value;
  
    // sending 0.5 ETH
    const options = {
      type: "native", //BSC/erc20/erc721/
      amount: Moralis.Units.ETH(amount), 
      receiver: address
    }
    

    let result = await Moralis.transfer(options);
  }

  document.getElementById("connect_wallet").onclick = login;
  // document.getElementById("btn-login2").onclick = login2;
  // document.getElementById("btn-logout").onclick = logout;
  
  // FUNCTION CLICK LISTENER
  document.getElementById("transfer-bnb").onclick = transferBNB;

  
  