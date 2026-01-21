import { NextRequest, NextResponse } from "next/server";

export const proxy = (req: NextRequest) => {

    console.log(req.url);


    return NextResponse.next();
};

export const config = {
    matcher: ["/dashboard"]
}