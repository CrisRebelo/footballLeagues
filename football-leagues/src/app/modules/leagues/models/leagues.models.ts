import { IncludedData } from "src/app/core/data-models/request-response.models"

export interface BaseLeague {
    active: boolean,
    country?: IncludedData<Country>,
    country_id: number,
    coverage: Coverage,
    current_round_id: number,
    current_season_id: number,
    current_stage_id: number,
    id: number,
    is_cup: boolean,
    is_friendly: boolean,
    legacy_id: number,
    live_standings: boolean,
    logo_path: string,
    name: string,
    season?: IncludedData<Season>,
    type: string
}

interface Coverage {
    predictions: boolean,
    topscorer_goals: boolean,
    topscorer_assists: boolean,
    topscorer_cards: boolean
}

interface Country {
    extra: ExtraCountryInfo,
    id: number,
    image_path: string,
    name: string
}

interface ExtraCountryInfo {
    continent: string,
    fifa: string,
    flag: string,
    iso: string,
    iso2: string,
    latitude: string,
    longitude: string,
    sub_region: string,
    world_region: string
}

interface Season {
    current_round_id: number,
    current_stage_id: number,
    id: number,
    is_current_season: boolean,
    league_id: number,
    name: string
}