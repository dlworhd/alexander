"use client";

import { cn } from "@/lib/utils";
import React from "react";

export interface SelectItem {
    id: number;
    value: string;
}

interface SelectProps {
    children: React.ReactNode;
}

interface SelectTriggerProps {
    children: React.ReactNode;
    onClick: () => void;
}

interface SelectItemProps {
    value: string;
    children: React.ReactNode;
    onClick: (value: string) => void;
}

export function Select({ children }: SelectProps) {
    return (
        <div
            className={cn("relative border border-[var(--border)] rounded-sm")}
        >
            {children}
        </div>
    );
}

export function SelectContent({ children }: SelectProps) {
    return (
        <div
            className={cn(
                "border border-[var(--border)] bg-[var(--container-background)] rounded-sm",
                "absolute top-full left-0 w-full mt-2 p-2"
            )}
        >
            {children}
        </div>
    );
}

export function SelectTrigger({ children, onClick }: SelectTriggerProps) {
    return (
        <div
            className={cn("flex items-center p-2 h-[48px] cursor-pointer")}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

export function SelectValue({ ...props }: HTMLInputElement) {
    return (
        <div className={cn("")}>
            <input placeholder={props.placeholder} />
        </div>
    );
}

export function SelectItem({ value, children, onClick }: SelectItemProps) {
    const handleItemClick = () => {
        onClick(value);
    };

    return (
        <div className={cn("")} onClick={handleItemClick}>
            {children}
        </div>
    );
}

Select.Item = SelectItem;
Select.Value = SelectValue;
Select.Trigger = SelectTrigger;
Select.Content = SelectContent;
