import {
    generateUploadButton,
    generateUploadDropzone,
} from "@uploadthing/react";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";

import type { OurFileRouter } from "~/app/api/uploadthing/core";

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

