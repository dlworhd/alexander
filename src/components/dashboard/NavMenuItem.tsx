import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { JSX } from "react";

// 타입 정의
export interface NavItem {
    id: number;
    name: string;
    path: string;
    icon: React.ReactNode;
}

interface NavMenuItemProps {
    item: NavItem;
}

export default function NavMenuItem({ item }: NavMenuItemProps) {
    return (
        <Link href={item.path}>
            <li className={cn("text-sm flex gap-4 hover:opacity-40")}>
                <div>{item.icon}</div>
                <div>{item.name}</div>
            </li>
        </Link>
    );
}
