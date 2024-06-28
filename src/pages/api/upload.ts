import { NextApiRequest, NextApiResponse, PageConfig } from "next";
import formidable from "formidable";

const formidableConfig = {
  keepExtensions: true,
  maxFileSize: 10_000_000,
  maxFieldsSize: 10_000_000,
  maxFields: 7,
  allowEmptyFiles: false,
  multiples: false,
  uploadDir: "./public/uploads",
};

function formidablePromise(
  req: NextApiRequest,
  opts?: Parameters<typeof formidable>[0]
): Promise<{ fields: formidable.Fields; files: formidable.Files }> {
  console.log("formidable called");
  return new Promise((accept, reject) => {
    const form = formidable(opts);

    form.parse(req, (err, fields, files) => {
      if (err) {
        return reject(err);
      }
      return accept({ fields, files });
    });
  });
}

export async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NextApiResponse>
) {
  try {
    await formidablePromise(req, {
      ...formidableConfig,
    });
    res.status(200);
  } catch (e) {
    res.status(500);
  }
}

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

export default handler;
