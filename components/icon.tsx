'use client';

import dynamic from 'next/dynamic';
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

export type IconName = keyof typeof dynamicIconImports;

interface IconProps extends LucideProps {
    name: IconName;
}

const icons = Object.fromEntries(
    Object.entries(dynamicIconImports).map(([name, importIcon]) => [
        name,
        dynamic(importIcon),
    ])
) as Record<IconName, React.ComponentType<LucideProps>>;

export const Icon = ({ name, ...props }: IconProps) => {
    const LucideIcon = icons[name];

    if (!LucideIcon) {
        return null;
    }

    return <LucideIcon {...props} />;
};