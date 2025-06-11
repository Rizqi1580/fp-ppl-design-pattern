interface StatStrategy{
  calculate(requests: Request[]): Statistics;
}

type Request ={
  time_request: Date;
  amount: number;
};

type Statistics ={
  period: string;
  totalAmount: number;
  count: number;
};

class YearlyStatStrategy implements StatStrategy{
  calculate(requests: Request[]): Statistics{
    // Logic hitung statistik per tahun
    };
  }
}
class MonthlyStatStrategy implements StatStrategy{
  calculate(requests: Request[]): Statistics{
    // Logic hitung statistik per bulan
    };
  }
}
class WeeklyStatStrategy implements StatStrategy{
  calculate(requests: Request[]): Statistics{
    // Logic hitung statistik per minggu
    };
  }
}
