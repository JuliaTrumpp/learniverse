import { useRouter } from "next/router";
import ModuleDetail_Module from "@/components/ModuleDetail/ModuleDetail_Module";

export default function ModuleDetail() {
  const router = useRouter();

  const { moduleName } = router.query;

  return (
    <div>
      <ModuleDetail_Module moduleDetail={moduleName}></ModuleDetail_Module>
    </div>
  );
}
