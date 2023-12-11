PodRacer
Dummie application

About Next.js Client

 - Client vs Server components

Ruby API Pod/Users API

About Datadog implementation

  - Agent in a mac infrastructure
  - Logs
    
  - APM for Ruby API
    https://docs.datadoghq.com/tracing/trace_collection/dd_libraries/ruby/#installation
    Enabling the tracer
    
    
    Application logs: 
    https://docs.datadoghq.com/logs/log_collection/ruby/?tab=lograge#connect-logs-and-traces
    1. Add gem 'lograge' to the pdapi/Gemfile
    2. In the Ruby application configuration file pdapi/config/application.rb, set the following to configure Lograge:
   
      # Lograge config
      config.lograge.enabled = true
      
      # This specifies to log in JSON format
      config.lograge.formatter = Lograge::Formatters::Json.new
      
      ## Disables log coloration
      config.colorize_logging = false
      
      # Log to a dedicated file
      config.lograge.logger = ActiveSupport::Logger.new(Rails.root.join('log', "#{Rails.env}.log"))
      
      # This is useful if you want to log query parameters
      config.lograge.custom_options = lambda do |event|
          { :ddsource => 'ruby',
            :params => event.payload[:params].reject { |k| %w(controller action).include? k }
          }
      end
    3. Configure the Datadog Agent
       
       Create a ruby.d/ folder in the conf.d/ Agent configuration directory.
       Create a conf.yaml file in ruby.d/ with the following content:
         logs:
           - type: file
             path: "<RUBY_LOG_FILE_PATH>.log" (pdapi/log/development.log)
             service: <SERVICE_NAME>
             source: ruby
             sourcecategory: sourcecode
             ## Uncomment the following processing rule for multiline logs if they
             ## start by the date with the format yyyy-mm-dd
             #log_processing_rules:
             #  - type: multi_line
             #    name: new_log_start_with_date
             #    pattern: \d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])

    
  - APM for Next.js Client (server-components)
    
