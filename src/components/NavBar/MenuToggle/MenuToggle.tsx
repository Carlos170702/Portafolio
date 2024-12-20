import { NextPage } from "next";
import { CustomPath } from "../CustomPath";

interface Props {
  toggle: () => void;
}

export const MenuToggle: NextPage<Props> = ({ toggle }) => (
  <button onClick={toggle} className="bg-red-600">
    <svg width="20" height="20" viewBox="0 0 23 23">
      <CustomPath
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <CustomPath
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <CustomPath
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);
