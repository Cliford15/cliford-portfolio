import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function PieGraph() {
    const data = [
        { name: "Back-end", value: 40 },
        { name: "Front-end", value: 30 },
        { name: "Database", value: 20 },
        { name: "Dev-ops", value: 10 },
    ];

    const COLORS = ["#ef4444", "#f97316", "#3b82f6", "#22c55e"];

    return (
        <Card className="flex-1 min-w-[300px] mx-auto p-4 shadow-lg font-Montserrat bg-transparent/5">
            <CardHeader>
                <CardTitle className="text-center text-slate-200">Programming Knowledge</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
                {/* ResponsiveContainer makes it scale properly */}
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        isAnimationActive={true}
                        animationDuration={800}
                        label={({ name, percent }) =>
                            `${name}: ${(percent * 100).toFixed(0)}%`
                        }
                        >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        </Pie>
                        <Tooltip />
                        <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}