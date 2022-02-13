{
  lib,
  pkgs,
  # dream2nix
  satisfiesSemver,
  ...
}:
{
  usb.build = {
    buildInputs = with pkgs; [ libudev python3 ];
    nativeBuildInputs = with pkgs; [ jq nodePackages.npm nodejs ];
  };
  "@abandonware/bluetooth-hci-socket".build = {
    nativeBuildInputs = with pkgs; [ nodePackages.node-pre-gyp ];
  };
}
