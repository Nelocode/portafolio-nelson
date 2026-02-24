import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const dataFilePath = path.join(process.cwd(), "src", "data", "projects.json");

export async function GET() {
    try {
        const fileContents = await fs.readFile(dataFilePath, "utf8");
        const projects = JSON.parse(fileContents);
        return NextResponse.json(projects);
    } catch (error) {
        return NextResponse.json({ error: "Failed to read data" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const newProjects = await request.json();

        // In a production specific environment like Vercel, this won't persist.
        // However, on a VPS or local environment, this allows easy updating of the JSON.
        await fs.writeFile(dataFilePath, JSON.stringify(newProjects, null, 2), "utf8");

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Failed to save data" }, { status: 500 });
    }
}
