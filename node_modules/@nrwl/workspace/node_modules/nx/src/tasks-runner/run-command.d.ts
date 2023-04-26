import { TasksRunner } from './tasks-runner';
import { NxArgs } from '../utils/command-line-utils';
import { LifeCycle } from './life-cycle';
import { ProjectGraph, ProjectGraphProjectNode } from '../config/project-graph';
import { NxJsonConfiguration } from '../config/nx-json';
import { Task, TaskGraph } from '../config/task-graph';
import { TargetDependencyConfig } from '../config/workspace-json-project-json';
export declare function runCommand(projectsToRun: ProjectGraphProjectNode[], projectGraph: ProjectGraph, { nxJson }: {
    nxJson: NxJsonConfiguration;
}, nxArgs: NxArgs, overrides: any, initiatingProject: string | null, extraTargetDependencies: Record<string, (TargetDependencyConfig | string)[]>, extraOptions: {
    excludeTaskDependencies: boolean;
    loadDotEnvFiles: boolean;
}): Promise<void>;
export declare function invokeTasksRunner({ tasks, projectGraph, taskGraph, lifeCycle, nxJson, nxArgs, loadDotEnvFiles, initiatingProject, }: {
    tasks: Task[];
    projectGraph: ProjectGraph;
    taskGraph: TaskGraph;
    lifeCycle: LifeCycle;
    nxJson: NxJsonConfiguration;
    nxArgs: NxArgs;
    loadDotEnvFiles: boolean;
    initiatingProject: string | null;
}): Promise<0 | 1>;
export declare function getRunner(nxArgs: NxArgs, nxJson: NxJsonConfiguration): {
    tasksRunner: TasksRunner;
    runnerOptions: any;
};
