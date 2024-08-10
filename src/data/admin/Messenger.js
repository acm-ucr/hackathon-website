const fs = require("fs");
const pathToFile = "@/data/admin/Messenger.js";

function verifyAndDeleteFile(pathToFile) {
  fs.access(pathToFile, fs.constants.F_OK, (err) => {
    if (err) {
      if (err.code === "ENOENT") {
        console.log("File does not exist.");
      } else {
        console.log("Error accessing file:", err.message);
      }
      return;
    }
    fs.open(pathToFile, "r+", (err, fd) => {
      if (err) {
        if (err.code === "EBUSY") {
          console.log("File and content is being use.");
        } else if (err.code === "ENOENT") {
          console.log("File does not exist.");
        } else {
          console.error(
            "An error occurred when opening the file:",
            err.message,
          );
        }
        return;
      }

      fs.close(fd, (closeErr) => {
        if (closeErr) {
          console.error("Error closing file:", closeErr.message);
          return;
        }

        fs.unlink(pathToFile, (unlinkErr) => {
          if (unlinkErr) {
            console.error("Error deleting file:", unlinkErr.message);
          } else {
            console.log("File deleted.");
          }
        });
      });
    });
  });
}

verifyAndDeleteFile(pathToFile);

export const FILTERS = {
  participants: {
    state: false,
    value: 10,
  },
  volunteers: {
    state: false,
    value: 20,
  },
  mentors: {
    state: false,
    value: 30,
  },
  judges: {
    state: false,
    value: 40,
  },
  admins: {
    state: false,
    value: 50,
  },
  committees: {
    state: false,
    value: 60,
  },
};

export const STATUSES = {
  pending: {
    state: false,
    value: 0,
  },
  accept: {
    state: false,
    value: 1,
  },
  reject: {
    state: false,
    value: -1,
  },
};
