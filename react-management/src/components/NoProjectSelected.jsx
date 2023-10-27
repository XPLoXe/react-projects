import Button from "./Button";

import noProjectImage from "../assets/no-projects.png";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="w-2/3 mt-16 text-center">
      <img
        src={noProjectImage}
        alt="An emptu task list"
        className="object-contain w-16 h-16 mx-auto"
      />
      <h2 className="my-4 text-xl font-bold text-stone-500">
        No project selected
      </h2>
      <p className="mb-4 text-stone-400">
        Choose a project from the sidebar to get started.
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}
