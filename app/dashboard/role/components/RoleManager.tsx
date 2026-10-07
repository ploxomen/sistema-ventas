import { Icon } from "@/components/icon";
import { ContentBox } from "@/components/setting-option";
import { RoleData } from "@/types/role";
import { Button } from "@heroui/react";
import { PencilIcon, Trash } from "lucide-react";

interface Props {
  roles: RoleData[];
  onEdit : (id : number) => void,
  onDelete : (id : number) => void,
}
export default function RoleManage({ roles = [], onEdit = () => {}, onDelete = () => {}}: Props) {
  return (
    <ContentBox className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
      {roles.map((role) => (
        <div key={role.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-sm bg-primary">
                  <Icon name={role.icon} size={25}/>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    {role.name}
                  </h3>
                  <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded-full bg-slate-100 text-slate-600 mt-0.5">
                    Sistema
                  </span>
                </div>
              </div>
              <div className="flex space-x-1">
                <Button size="sm" isIconOnly color="secondary" onPress={e => onEdit(role.id!)}>
                    <PencilIcon size={14}/>
                </Button>
                <Button size="sm" isIconOnly color="danger" variant="flat" onPress={e => onDelete(role.id!)}>
                    <Trash size={14}/>
                </Button>
              </div>
            </div>
            {role.description && (
              <p className="text-sm text-slate-500 mt-3 line-clamp-2">
                {role.description}
              </p>
            )}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Módulos asignados (
                <span x-text="role.modules.length">{role.modules.length}</span>)
              </span>
              <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
                {role.modules.length === 0 && (
                  <span className="text-xs italic text-slate-400">
                    Sin módulos asignados
                  </span>
                )}
                {role.modules.map((module) => (
                  <span
                    key={module.id}
                    className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100"
                  >
                    <span>{module.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </ContentBox>
  );
}
