"use server"

import { onCurrentUser } from "../user"
import { getAutomations } from "./queries";

export const getAllAutomations = async () => {
    const user = await onCurrentUser();
    try {
        const automations = await getAutomations()
    } catch (error) {
        
    }
}