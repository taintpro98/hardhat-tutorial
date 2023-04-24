import hre from 'hardhat';

async function main() {
 // load contract Greeter
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  
  // Truyền tham số cho hàm constructor
  const greeter = await Greeter.deploy("Vui Tet Cung Viblo");

 // deploy contract
  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
