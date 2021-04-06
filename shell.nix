{ pkgs ? import ./nix/deps/nixpkgs {}, daml ? import ./nix/deps/daml.nix { inherit pkgs; } }:
pkgs.mkShell {
  name = "daml-shell";
  nativeBuildInputs = [ daml pkgs.openjdk pkgs.nodejs-15_x ];
}

