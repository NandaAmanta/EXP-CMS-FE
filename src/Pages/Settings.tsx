import { useEffect } from "react";


function Settings() {
  useEffect(() => {
    document.title = "CMS EXP - Settings";
  });

  return <div>Settings</div>;
}
export default Settings;
