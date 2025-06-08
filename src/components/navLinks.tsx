'use client';

import Link from "next/link";
import ChartBarIcon from "@heroicons/react/24/solid/ChartBarIcon";
import Cog6ToothIcon from "@heroicons/react/24/solid/Cog6ToothIcon";
import UserCircleIcon from "@heroicons/react/24/solid/UserCircleIcon";
import { CalendarDateRangeIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

const links = [
    {name: 'Orders',href:'/orders',icon: ClipboardDocumentListIcon},
    {name: 'Dashboard', href:'/dashboard', icon: ChartBarIcon},
    {name: 'Profile', href:'/profile', icon: UserCircleIcon},
    {name: 'Settings', href:'/settings', icon: Cog6ToothIcon},
]

export default function NavLinks() {
    const pathname = usePathname();
    return(
        <>
        {links.map((link) => {
            const LinkIcon = link.icon;
            return(
                <Link
                 key={link.name}
                 href={link.href}
                 className={clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                    {
                        'bg-sky-100 text-blue-600': pathname === link.href,
                    },
                 )}
                >
                    <LinkIcon className="w-6"/>
                    <p className="hidden md:block"> {link.name}</p>
                </Link>
            );
        })}
        </>
    );
}