export interface Standing {
    away: PlayedGamesDetails,
    description: string,
    home: PlayedGamesDetails,
    overall: PlayedGamesDetails,
    points: number
    position: number
    recent_form: string,
    short_code: string,
    team_id: number
    team_logo: string,
    team_name: string
}

interface PlayedGamesDetails {
    games_played: number,
    won: number,
    draw: number,
    lost: number,
    goals_scored: number,
    goals_against: number,
    goal_diff: number
}

export interface FlatStandings {
    away_description: string,
    away_draw: number,
    away_games_played: number,
    away_goals_against: number,
    away_goals_scored: number,
    away_lost: number,
    points: number,
    away_recent_form: string,
    away_won: number,
    home_draw: number,
    home_games_played: number,
    home_goals_against: number,
    home_goals_scored: number,
    home_lost: number,
    home_won: number,
    overall_draw: number,
    overall_games_played: number,
    overall_goal_diff: number,
    overall_goals_against: number,
    overall_goals_scored: number,
    overall_lost: number,
    overall_won: number,
    position: number,
    short_code: string,
    team_id: number,
    team_logo: string,
    team_name: string,
}