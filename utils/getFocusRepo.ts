import { Repo } from "../components/types";
import { getUrlHash } from "./getUrlHash";

export function getFocusRepo(repos:Repo[],defaultRepo:string='voerka-i18n'){
    let repoName = getUrlHash()
    console.log("focus repo name:",repoName)    
    if(repoName.trim()=='') repoName = defaultRepo
    let repo = repos.find(repo => repo.name === repoName)
    if(!repo){
        repo = repos.find(repo => repo.name === defaultRepo)
    }
    return repo
}