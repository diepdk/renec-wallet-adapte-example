import dynamic from "next/dynamic";

const DemonWalletConnect = dynamic(
  async () =>
    (await import("@renec-foundation/wallet-adapter-react")).WalletMultiButton,
  { ssr: false }
);
// eslint-disable-next-line react/display-name
export default () => {
  return (
    <div>
      <DemonWalletConnect />
    </div>
  )
}
