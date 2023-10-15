
WALLETADDRESS="aleo1ehfcgk7vd38lkyk735vgea08qymzhwe3cc7lhqm9pvdmjvphvu8shfprq6"
PRIVATEKEY="APrivateKey1zkpEDXhfeEf1pot2UfDh7dNBs96Nmj2rk8uzyW4G45t9bPN"

APPNAME="zkjom_contracts"
PATHTOAPP=$(realpath -q $APPNAME)

RECORD="{
  owner: aleo1ehfcgk7vd38lkyk735vgea08qymzhwe3cc7lhqm9pvdmjvphvu8shfprq6.private,
  microcredits: 50000000u64.private,
  _nonce: 4329730828471287902257618603009169211099524168212729468143570070335508916702group.public
}"

cd .. && snarkos developer deploy "${APPNAME}.aleo" --private-key "${PRIVATEKEY}" --query "https://vm.aleo.org/api" --path "./${APPNAME}/build/" --broadcast "https://vm.aleo.org/api/testnet3/transaction/broadcast" --fee 1000000 --record "${RECORD}"``
