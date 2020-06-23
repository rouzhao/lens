import packageInfo from "../../../package.json"

// fixme: ENOENT: no such file or directory, mkdir '/foo/bar'
// import { bundledKubectl, Kubectl } from "../../../src/main/kubectl";
var bundledKubectl: any;
var Kubectl: any;

jest.mock("electron")
jest.mock("../../../src/common/user-store")

xdescribe("kubectlVersion", () => {
  it("returns bundled version if exactly same version used", async () => {
    const kubectl = new Kubectl(bundledKubectl.kubectlVersion)
    expect(kubectl.kubectlVersion).toBe(bundledKubectl.kubectlVersion)
  })

  it("returns bundled version if same major.minor version is used", async () => {
    const { bundledKubectlVersion } = packageInfo.config;
    const kubectl = new Kubectl(bundledKubectlVersion);
    expect(kubectl.kubectlVersion).toBe(bundledKubectl.kubectlVersion)
  })
})
