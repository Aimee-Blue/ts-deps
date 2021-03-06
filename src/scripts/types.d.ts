type BabelBuildParams = Partial<{
  doNotOutputTests: boolean;
  logCommandLine: boolean;
  exitOnCompletion: boolean;
  extensions: string[];
  outDir: string;
  rootDir: string;
  unitTestsGlob: string;
  integrationTestsGlob: string;
  copyAdditional: string[];
  commandLine: string[];
}>;

type RollupBuildParams = Partial<{
  logCommandLine: boolean;
  exitOnCompletion: boolean;
  extensions: string[];
  outDir: string;
  rootDir: string;
  unitTestsGlob: string;
  integrationTestsGlob: string;
  copyAdditional: string[];
  commandLine: string[];
}>;

type TemplateInfo = {
  type: 'directory' | 'package' | 'default';
  dir: string;
};

type PatchParams = Partial<{
  template: string;
  forceOverwrites: boolean;
  aggressive: boolean;
  baseTsConfigLocation: string;
  patchOnly: string[];
  cwd: string;
  targetDirectory: string;

  initializedTemplates: TemplateInfo[];
}>;

type InitParams = Partial<{
  template: string;
  targetDirectory: string;
  cwd: string;
  force: boolean;
}>;

type PatchPackageJson = Partial<{
  name: string;
  version: string;
  dependencies: {
    [key: string]: string | undefined;
  };
  devDependencies: {
    [key: string]: string | undefined;
  };
  [key: string]: unknown;
}>;

type PatchCoreOptions = {
  aggressive: boolean;
};

type CombineCoverageParams = {
  cwd: string;
};

type ReleaseParams = Partial<{
  cwd?: string;
  docker?: boolean;
  beta?: boolean;
  dockerArgs?: string[];
  cmdArgs?: string[];
  setExitCode?: boolean;
  extraEnvVars?: string[];
}>;
