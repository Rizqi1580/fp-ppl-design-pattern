class StatisticsManager{
  private static instance: StatisticsManager;

  private constructor() {}

  public static getInstance(): StatisticsManager{
    if (!StatisticsManager.instance){
      StatisticsManager.instance = new StatisticsManager();
    }
    return StatisticsManager.instance;
  }

  public calculateStats(): void {
    console.log("Hitung Statistik");
  }
}