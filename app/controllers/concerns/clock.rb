def relogio_digital
   render :text => "Agora : #{Time.current.to_s}"
end