"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaysAgo = exports.DateInstructions = void 0;
exports.DateInstructions = {
    "year": false,
    "month": false,
    "day": false,
    "hour": false,
    "minute": false,
    "second": false,
    "time": false,
    "date": false
};
function DaysAgo(value, DateInstructions = {}) {
    if (value) {
        if (!Date.parse(value.toString())) {
            return value + " " + "is an invalid date.";
        }
        const IsInstructionEmpty = IsObjectEmpty(DateInstructions);
        let newDate = +new Date();
        const intervals = {
            "year": 31536000,
            "month": 2592000,
            "week": 604800,
            "day": 86400,
            "hour": 3600,
            "minute": 60,
            "second": 1
        };
        const InstructionUsed = ExtractDatePart(value, DateInstructions).InstructionUsed;
        if (!IsInstructionEmpty) {
            value = ExtractDatePart(value, DateInstructions).value;
            newDate = ExtractDatePart(+new Date(), DateInstructions).value;
        }
        const seconds = Math.floor((+new Date(newDate) - +new Date(value)) / 1000);
        if (seconds > -1 && seconds < 29 && InstructionUsed == "none") {
            return "Just now";
        }
        if (seconds === 0 && InstructionUsed == "date") {
            return "This day";
        }
        let counter;
        if (seconds < 0 && InstructionUsed === "date" || InstructionUsed === "time" || InstructionUsed === "none") {
            const seconds = Math.floor((+new Date(value) - +new Date(newDate)) / 1000);
            for (const i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0) {
                    if (counter === 1) {
                        return counter + " " + i + " into the future";
                    }
                    else {
                        return counter + " " + i + "s into the future";
                    }
                }
            }
        }
        if (seconds > 0 && InstructionUsed === "date" || InstructionUsed === "time" || InstructionUsed === "none") {
            for (const i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0) {
                    if (counter === 1) {
                        return counter + " " + i + " ago";
                    }
                    else {
                        return counter + " " + i + "s ago";
                    }
                }
            }
        }
        if (InstructionUsed === "year") {
            if ((+new Date(newDate) > +new Date(value))) {
                counter = +new Date(newDate) - +new Date(value);
                if (counter > 0) {
                    if (counter === 1) {
                        return counter + " " + InstructionUsed + " ago";
                    }
                    else {
                        return counter + " " + InstructionUsed + "s ago";
                    }
                }
                else {
                    return "This" + " " + InstructionUsed;
                }
            }
            else {
                counter = +new Date(value) - +new Date(newDate);
                if (counter > 0) {
                    if (counter === 1) {
                        return counter + " " + InstructionUsed + " into the future";
                    }
                    else {
                        return counter + " " + InstructionUsed + "s into the future";
                    }
                }
                else {
                    return "This" + " " + InstructionUsed;
                }
            }
        }
        if (InstructionUsed === "month") {
            if ((+new Date(newDate) > +new Date(value))) {
                counter = +new Date(newDate) - +new Date(value);
                if (counter > 0) {
                    if (counter === 1) {
                        return counter + " " + InstructionUsed + " ago";
                    }
                    else {
                        return counter + " " + InstructionUsed + "s ago";
                    }
                }
                else {
                    return "This" + " " + InstructionUsed;
                }
            }
            else {
                counter = +new Date(value) - +new Date(newDate);
                if (counter > 0) {
                    if (counter === 1) {
                        return counter + " " + InstructionUsed + " into the future";
                    }
                    else {
                        return counter + " " + InstructionUsed + "s into the future";
                    }
                }
                else {
                    return "This" + " " + InstructionUsed;
                }
            }
        }
        if (InstructionUsed === "day") {
            if ((+new Date(newDate) > +new Date(value))) {
                counter = +new Date(newDate) - +new Date(value);
                if (counter > 0) {
                    if (counter === 1) {
                        return counter + " " + InstructionUsed + " ago";
                    }
                    else {
                        return counter + " " + InstructionUsed + "s ago";
                    }
                }
                else {
                    return "This" + " " + InstructionUsed;
                }
            }
            else {
                counter = +new Date(value) - +new Date(newDate);
                if (counter > 0) {
                    if (counter === 1) {
                        return counter + " " + InstructionUsed + " into the future";
                    }
                    else {
                        return counter + " " + InstructionUsed + "s into the future";
                    }
                }
                else {
                    return "This" + " " + InstructionUsed;
                }
            }
        }
        if (InstructionUsed === "hour") {
            if ((+new Date(newDate) > +new Date(value))) {
                counter = +new Date(newDate) - +new Date(value);
                if (counter > 0) {
                    if (counter === 1) {
                        return counter + " " + InstructionUsed + " ago";
                    }
                    else {
                        return counter + " " + InstructionUsed + "s ago";
                    }
                }
                else {
                    return "This" + " " + InstructionUsed;
                }
            }
            else {
                counter = +new Date(value) - +new Date(newDate);
                if (counter > 0) {
                    if (counter === 1) {
                        return counter + " " + InstructionUsed + " into the future";
                    }
                    else {
                        return counter + " " + InstructionUsed + "s into the future";
                    }
                }
                else {
                    return "This" + " " + InstructionUsed;
                }
            }
        }
        if (InstructionUsed === "minute") {
            if ((+new Date(newDate) > +new Date(value))) {
                counter = +new Date(newDate) - +new Date(value);
                if (counter > 0) {
                    if (counter === 1) {
                        return counter + " " + InstructionUsed + " ago";
                    }
                    else {
                        return counter + " " + InstructionUsed + "s ago";
                    }
                }
                else {
                    return "This" + " " + InstructionUsed;
                }
            }
            else {
                counter = +new Date(value) - +new Date(newDate);
                if (counter > 0) {
                    if (counter === 1) {
                        return counter + " " + InstructionUsed + " into the future";
                    }
                    else {
                        return counter + " " + InstructionUsed + "s into the future";
                    }
                }
                else {
                    return "This" + " " + InstructionUsed;
                }
            }
        }
        if (InstructionUsed === "second") {
            if ((+new Date(newDate) > +new Date(value))) {
                counter = +new Date(newDate) - +new Date(value);
                if (counter > 0) {
                    if (counter === 1) {
                        return counter + " " + InstructionUsed + " ago";
                    }
                    else {
                        return counter + " " + InstructionUsed + "s ago";
                    }
                }
                else {
                    return "This" + " " + InstructionUsed;
                }
            }
            else {
                counter = +new Date(value) - +new Date(newDate);
                if (counter > 0) {
                    if (counter === 1) {
                        return counter + " " + InstructionUsed + " into the future";
                    }
                    else {
                        return counter + " " + InstructionUsed + "s into the future";
                    }
                }
                else {
                    return "This" + " " + InstructionUsed;
                }
            }
        }
    }
    return value;
}
exports.DaysAgo = DaysAgo;
function ExtractDatePart(value, instructions) {
    if ((Object.getOwnPropertyDescriptor(instructions, "date")) && instructions.date === true) {
        const v = (new Date(value).getFullYear()) + "-" + (new Date(value).getMonth() + 1) + "-" + (new Date(value).getDate());
        return { value: +new Date(v), InstructionUsed: "date" };
    }
    if ((Object.getOwnPropertyDescriptor(instructions, "time")) && instructions.time === true) {
        const v = +new Date(value).getHours() + "-" + +new Date(value).getMinutes() + "-" + +new Date(value).getSeconds();
        return { value: +new Date(v), InstructionUsed: "time" };
    }
    if ((Object.getOwnPropertyDescriptor(instructions, "year")) && instructions.year === true) {
        return { value: +new Date(value).getFullYear(), InstructionUsed: "year" };
    }
    if ((Object.getOwnPropertyDescriptor(instructions, "month")) && instructions.month === true) {
        return { value: +new Date(value).getMonth() + 1, InstructionUsed: "month" };
    }
    if ((Object.getOwnPropertyDescriptor(instructions, "day")) && instructions.day === true) {
        return { value: +new Date(value).getDate(), InstructionUsed: "day" };
    }
    if ((Object.getOwnPropertyDescriptor(instructions, "hour")) && instructions.hour === true) {
        return { value: +new Date(value).getHours(), InstructionUsed: "hour" };
    }
    if ((Object.getOwnPropertyDescriptor(instructions, "minute")) && instructions.minute === true) {
        return { value: +new Date(value).getMinutes(), InstructionUsed: "minute" };
    }
    if ((Object.getOwnPropertyDescriptor(instructions, "second")) && instructions.second === true) {
        return { value: +new Date(value).getSeconds(), InstructionUsed: "second" };
    }
    return { value: +new Date(value), InstructionUsed: "none" };
}
function IsObjectEmpty(obj) {
    if (Object.getOwnPropertyNames(obj).length === 0) {
        return true;
    }
    return false;
}
