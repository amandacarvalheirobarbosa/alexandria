import { Books } from "../Books/Books";

export function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Alexandria</a>
      </div>
      <Books />
    </div>
  );
}
