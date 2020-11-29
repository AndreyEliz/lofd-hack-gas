using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace gas21.JsonModels
{
    public class PdfAnalyzerModels
    {
        public class Word
        {
            public List<double> boundingBox { get; set; }
            public string text { get; set; }
            public int confidence { get; set; }
        }

        public class Line
        {
            public List<double> boundingBox { get; set; }
            public string text { get; set; }
            public List<Word> words { get; set; }
        }

        public class ReadResult
        {
            public int page { get; set; }
            public string language { get; set; }
            public int angle { get; set; }
            public double width { get; set; }
            public double height { get; set; }
            public string unit { get; set; }
            public List<Line> lines { get; set; }
        }

        public class PageResult
        {
            public int page { get; set; }
            public List<object> tables { get; set; }
        }

        public class AnalyzeResult
        {
            public string version { get; set; }
            public List<ReadResult> readResults { get; set; }
            public List<PageResult> pageResults { get; set; }
        }

        public class Root
        {
            public string status { get; set; }
            public DateTime createdDateTime { get; set; }
            public DateTime lastUpdatedDateTime { get; set; }
            public AnalyzeResult analyzeResult { get; set; }
        }
    }
}
