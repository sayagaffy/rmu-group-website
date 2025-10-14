'use client';

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface MPALTechnologyProps {
  title: string;
  description: string;
  process: ProcessStep[];
}

export default function MPALTechnology({ title, description, process }: MPALTechnologyProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block" />

          {/* Steps */}
          <div className="space-y-12">
            {process.map((step) => (
              <div key={step.step} className="relative flex items-start">
                {/* Number badge */}
                <div className="absolute left-0 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>

                {/* Content */}
                <div className="md:ml-24 ml-20 flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
