import Link from 'next/link';

type SidebarButtonProps = {
  icon: string;
  name: string;
  path: string;
  selected: boolean;
};

export const DropdownButton = ({ icon, name, path = '/', selected }: SidebarButtonProps) => {
  return (
    <Link className={`flex flex-row items-center justify-center pl-4 pr-4 ${selected ? 'border-b-2 border-blue-500' : ''}`} href={path} passHref>
      <span title={name} className="mb-2 mt-2 text-sky-900 material-symbols-sharp" style={selected ? {fontVariationSettings: "'FILL' 1, 'wght' 500, 'GRAD' -25, 'opsz' 48"} : {}}>
        {icon}
      </span>
    </Link>
  );
};