"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import NavMenu from "./NavMenu";
import NavFooter from "./NavFooter";
import NavHeader from "./NavHeader";
import {
    CalendarIcon,
    CircleDashedIcon,
    InboxIcon,
    MenuIcon,
} from "lucide-react";
import NavMenuItem, { NavItem } from "./NavMenuItem";
import { Select, SelectItem } from "../common/Select";

export default function SideBar() {
    const [selectedItem, setSelectedItem] = useState("");
    const [isSelectVisible, setIsSelectVisible] = useState(false);

    const selectItems: SelectItem[] = [
        { id: 1, value: "프로젝트" },
        { id: 2, value: "설정" },
        { id: 3, value: "로그아웃" },
    ];
    const navItems: NavItem[] = [
        {
            id: 1,
            name: "Dashboard",
            path: "/dashboard",
            icon: <MenuIcon width={20} height={20} />,
        },
        {
            id: 2,
            name: "Inbox",
            path: "/dashboard/inbox",
            icon: <InboxIcon width={20} height={20} />,
        },
        {
            id: 3,
            name: "Issues",
            path: "/dashboard/issues",
            icon: <CircleDashedIcon width={20} height={20} />,
        },
        {
            id: 4,
            name: "Calendar",
            path: "/dashboard/calendar",
            icon: <CalendarIcon width={20} height={20} />,
        },
    ];

    const handleItemClick = (value: string) => {
        setSelectedItem(value);
        setIsSelectVisible(false);
    };

    const handleTrigger = () => {
        setIsSelectVisible(!isSelectVisible);
    };

    // 렌더링 함수
    const renderSelectContent = () => {
        if (!isSelectVisible) return null;

        return (
            <Select.Content>
                {selectItems.map((item) => (
                    <Select.Item
                        key={item.id}
                        value={item.value}
                        onClick={handleItemClick}
                    >
                        {item.value}
                    </Select.Item>
                ))}
            </Select.Content>
        );
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 flex flex-col justify-between w-[var(--sidebar-width)] h-[var(--sidebar-height)] p-4"
            )}
        >
            <NavHeader className="flex-1">
                <Select>
                    <Select.Trigger onClick={handleTrigger}>
                        {selectedItem || "@bankusy"}
                    </Select.Trigger>
                    {renderSelectContent()}
                </Select>
            </NavHeader>
            <NavMenu className="flex-8 p-2">
                {navItems.map((item) => (
                    <NavMenuItem key={item.id} item={item}></NavMenuItem>
                ))}
            </NavMenu>
            <NavFooter className="flex-1">
                <div></div>
            </NavFooter>
        </header>
    );
}
