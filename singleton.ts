Class Statistics{
  private static instance: Statistics;

  private constructor() {}

  public static getInstance(): Statistics{
    if (!Statistics.instance){
      Statistics.instance = new Statistics();
    }
    return Statistics.instance;
  }
